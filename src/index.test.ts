import {
  getDeputies,
  getDeputiesInOffice,
  getDeputy,
  getPoliticalGroups,
  getParliamentaryBodies,
  getExtraParliamentaryBodies,
  getStudyGroupsAndFriendship,
  getMembersOfGroup,
  getMembersOfOrganisation,
  getLegislativeFiles,
  getLegislativeFileDetails,
  LegislativeFilesOrderBy,
} from "./index";

it("Call getDeputies()", async () => {
  return getDeputies().then(ds => {
    expect(ds.length).toBeGreaterThan(0);
    ds.forEach(d => {
      expect(d.image15).toBeDefined();
      expect(d.image30).toBeDefined();
      expect(d.image60).toBeDefined();
      expect(d.image120).toBeDefined();
      expect(d.imageDynamic(50)).toBeDefined();
      expect(d.nbMandatsTotaux).toBeDefined();
    });
  });
});

it("Call getDeputiesInOffice()", async () => {
  return getDeputiesInOffice().then(ds => {
    expect(ds.length).toBeGreaterThan(0);
    ds.forEach(d => {
      expect(d.image15).toBeDefined();
      expect(d.image30).toBeDefined();
      expect(d.image60).toBeDefined();
      expect(d.image120).toBeDefined();
      expect(d.imageDynamic(50)).toBeDefined();
      expect(d.nbMandatsTotaux).toBeDefined();
    });
  });
});

it("Call getDeputy('patricia-lemoine')", async () => {
  return getDeputy("patricia-lemoine").then(d => {
    expect(d).toBeDefined();
    expect(d.image15).toBeDefined();
    expect(d.image30).toBeDefined();
    expect(d.image60).toBeDefined();
    expect(d.image120).toBeDefined();
    expect(d.imageDynamic(50)).toBeDefined();
    expect(d.nbMandatsTotaux).toBeDefined();
  });
});

it("Call getPoliticalGroups()", async () => {
  return getPoliticalGroups().then(d => {
    expect(d).toBeDefined();
  });
});

it("Call getParliamentaryBodies()", async () => {
  return getParliamentaryBodies().then(d => {
    expect(d).toBeDefined();
  });
});

it("Call getExtraParliamentaryBodies()", async () => {
  return getExtraParliamentaryBodies().then(d => {
    expect(d).toBeDefined();
  });
});

it("Call getStudyGroupsAndFriendship()", async () => {
  return getStudyGroupsAndFriendship().then(d => {
    expect(d).toBeDefined();
  });
});

it("Call getMembersOfGroup('NI')", async () => {
  return getMembersOfGroup("NI").then(d => {
    expect(d).toBeDefined();
  });
});

it("Call getMembersOfOrganisation('agence-business-france')", async () => {
  return getMembersOfOrganisation("agence-business-france").then(d => {
    expect(d).toBeDefined();
  });
});

it("Call getLegislativeFiles()", async () => {
  return getLegislativeFiles().then(d => {
    expect(d).toBeDefined();
  });
});

it("Call getLegislativeFiles(LegislativeFilesOrderBy.Alphanumeric)", async () => {
  return getLegislativeFiles(LegislativeFilesOrderBy.Alphanumeric).then(d => {
    expect(d).toBeDefined();
  });
});

it("Call getLegislativeFileDetails(1)", async () => {
  return getLegislativeFileDetails(1).then(d => {
    expect(d).toBeDefined();
  });
});
