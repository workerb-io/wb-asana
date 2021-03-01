import createSection from "../../../../../../../../common/createSection";
import { PROJECTS, SECTIONS, TEAMS, WORKSPACES } from "../../../../../../../../utils/constants";
import { Project, Team, Workspace } from "../../../../../../../../utils/interfaces";

// @description Create new section

if (options.workspaces && options.teams && options.projects) {
	const workspace = options.workspaces as Workspace;
	const team = options.teams as Team;
	const project = options.projects as Project;
	const indexPath: string[] = [WORKSPACES, workspace.name, TEAMS, team.name, PROJECTS, project.name, SECTIONS];
	createSection(project.gid, indexPath);
}