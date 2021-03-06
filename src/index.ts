import assign from "lodash/assign";

import Deputy from "./CoreAPI/Deputy";
import Organizations from "./CoreAPI/Organizations";
import ParliamentaryDebates from "./CoreAPI/ParliamentaryDebates";

export const getDeputies = Deputy.getDeputies;
export const getDeputiesInOffice = Deputy.getDeputiesInOffice;
export const getDeputy = Deputy.getDeputy;
export const getPoliticalGroups = Organizations.getPoliticalGroups;
export const getParliamentaryBodies = Organizations.getParliamentaryBodies;
export const getExtraParliamentaryBodies =
  Organizations.getExtraParliamentaryBodies;
export const getStudyGroupsAndFriendship =
  Organizations.getStudyGroupsAndFriendship;
export const getMembersOfGroup = Organizations.getMembersOfGroup;
export const getMembersOfOrganisation = Organizations.getMembersOfOrganisation;
export const getLegislativeFiles = ParliamentaryDebates.getLegislativeFiles;
export const getLegislativeFileDetails =
  ParliamentaryDebates.getLegislativeFileDetails;
export const LegislativeFilesOrderBy =
  ParliamentaryDebates.LegislativeFilesOrderBy;
export const getAmendmentsOnText = ParliamentaryDebates.getAmendmentsOnText;
export const getInterventionsOfASession =
  ParliamentaryDebates.getInterventionsOfASession;

export default assign({}, Deputy, Organizations, ParliamentaryDebates);
