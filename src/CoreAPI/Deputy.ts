import assign from "lodash/assign";
import { getFromUrl } from "../Utils/APICall";
import { getSafeArrayLength } from "./Mappings";
import { cleanUpNestedObject } from "../Utils/NestedObjectManagement";
import "./Deputy.Types";

/**
 * Fonction qui retourne la liste des députés sous forme d'une promesse.
 *
 * @export
 * @returns la liste de tous les députés [[IDeputy]]
 */
export async function getDeputies() {
  const r = await getFromUrl<IDeputies>(
    "https://www.nosdeputes.fr/deputes/json"
  );
  const cleanedUpDeputies: IDeputy[] = cleanUpNestedObject(r.data).map(
    (d: IMinimalDeputy) => deputyCustomAttributes(d)
  );
  return cleanedUpDeputies;
}

/**
 * Fonction qui retourne la liste des députés en mandat sous forme d'une promesse.
 *
 * @export
 * @returns la liste de tous les députés en mandat [[IDeputy]]
 */
export async function getDeputiesInOffice() {
  const r = await getFromUrl<IDeputies>(
    "https://www.nosdeputes.fr/deputes/enmandat/json"
  );
  const cleanedUpDeputies: IDeputy[] = cleanUpNestedObject(r.data).map(
    (d: IMinimalDeputy) => deputyCustomAttributes(d)
  );
  return cleanedUpDeputies;
}

/**
 * Retourne le détail d'un député
 *
 * @export
 * @param {string} slug le slug du député qui peut être trouvé dans [[IDepute.slug]]
 * @returns le détail d'un député
 */
export async function getDeputy(slug: string) {
  const r = await getFromUrl<IDetailedDeputyHolder>(
    `https://www.nosdeputes.fr/${slug}/json`
  );
  const cleanedUpDeputy: IDetailedDeputy = deputyCustomAttributes(
    cleanUpNestedObject(r.data)
  );
  return cleanedUpDeputy;
}

function deputyCustomAttributes(deputy: IMinimalDeputy): any {
  const slug = deputy.slug;
  const urlDynamic = (height: number) =>
    `https://www.nosdeputes.fr/depute/photo/${slug}/${height}`;
  const url15 = urlDynamic(15);
  const url30 = urlDynamic(30);
  const url60 = urlDynamic(60);
  const url120 = urlDynamic(120);
  const nbMandatsTotaux =
    getSafeArrayLength(deputy.anciens_mandats) +
    getSafeArrayLength(deputy.autres_mandats) +
    getSafeArrayLength(deputy.anciens_autres_mandats);
  return assign({}, deputy, {
    image15: url15,
    image30: url30,
    image60: url60,
    image120: url120,
    imageDynamic: urlDynamic,
    nbMandatsTotaux,
  });
}

export default {
  getDeputies,
  getDeputiesInOffice,
  getDeputy,
};
