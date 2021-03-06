import removeSection from "../../../../../../../../../common/removeSection";
import { PROJECTS, SECTIONS, TEAMS, WORKSPACES } from "../../../../../../../../../utils/constants";
import { Project, Section, Team, Workspace } from "../../../../../../../../../utils/interfaces";

// @description Delete Section

if (options.workspaces && options.teams && options.sections) {
	const workspace = options.workspaces as Workspace;
	const team = options.teams as Team;
	const project = options.projects as Project;
	const section = options.sections as Section;
	const indexPath: string[] = [WORKSPACES, workspace.name, TEAMS, team.name, PROJECTS, project.name, SECTIONS];
	removeSection(section.gid, indexPath);
}