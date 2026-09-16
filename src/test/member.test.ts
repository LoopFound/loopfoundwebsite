import { describe, expect, it } from "vitest";
import { getMemberBySlug, teamMembers } from "../data/team";

describe("team member data & slug resolution", () => {
  it("resolves Gopinath via various cases and aliases", () => {
    const member = getMemberBySlug("Gopinath");
    expect(member).toBeDefined();
    expect(member?.name).toBe("Gopinath");
    expect(member?.role).toContain("CMO");

    expect(getMemberBySlug("gopinath")?.name).toBe("Gopinath");
    expect(getMemberBySlug("gopi")?.name).toBe("Gopinath");
  });

  it("resolves Pranith via various cases and aliases", () => {
    const member = getMemberBySlug("Pranith");
    expect(member).toBeDefined();
    expect(member?.name).toBe("Pranith Vincent");
    expect(member?.role).toContain("CEO");

    expect(getMemberBySlug("pranith")?.name).toBe("Pranith Vincent");
    expect(getMemberBySlug("pranith-vincent")?.name).toBe("Pranith Vincent");
  });

  it("resolves Sai Charan via various cases and aliases", () => {
    const member = getMemberBySlug("SaiCharan");
    expect(member).toBeDefined();
    expect(member?.name).toBe("Sai Charan");
    expect(member?.role).toContain("Backend");

    expect(getMemberBySlug("saicharan")?.name).toBe("Sai Charan");
    expect(getMemberBySlug("sai-charan")?.name).toBe("Sai Charan");
  });

  it("returns undefined for unknown member slugs", () => {
    expect(getMemberBySlug("nonexistent")).toBeUndefined();
    expect(getMemberBySlug("")).toBeUndefined();
  });

  it("ensures all team members have complete profiles, skills, and projects", () => {
    expect(teamMembers.length).toBe(3);

    for (const member of teamMembers) {
      expect(member.name).toBeTruthy();
      expect(member.role).toBeTruthy();
      expect(member.tagline).toBeTruthy();
      expect(member.quote).toBeTruthy();
      expect(member.bio.length).toBeGreaterThanOrEqual(2);
      expect(member.stats.length).toBeGreaterThanOrEqual(4);
      expect(member.skillCategories.length).toBeGreaterThanOrEqual(3);
      expect(member.responsibilities.length).toBeGreaterThanOrEqual(3);
      expect(member.featuredProjects.length).toBeGreaterThanOrEqual(2);

      for (const category of member.skillCategories) {
        expect(category.title).toBeTruthy();
        expect(category.skills.length).toBeGreaterThanOrEqual(3);
      }
    }
  });
});
