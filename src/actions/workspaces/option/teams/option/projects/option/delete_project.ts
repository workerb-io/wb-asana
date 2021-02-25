import removeProject from "../../../../../../../common/removeProject";
import { PROJECTS, TEAMS, WORKSPACES } from "../../../../../../../utils/constants";
import { Project, Team, Workspace } from "../../../../../../../utils/interfaces";

// @description Delete Project

if (options.workspaces && options.teams && options.projects) {
	const workspace = options.workspaces as Workspace;
	const team = options.teams as Team;
	const project = options.projects as Project;
	const indexPath: string[] = [WORKSPACES, workspace.name, TEAMS, team.name, PROJECTS];
	removeProject(project.gid, indexPath);
}