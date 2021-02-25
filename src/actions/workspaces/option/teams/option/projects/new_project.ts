import createProject from "../../../../../../common/createProject";
import { PROJECTS, TEAMS, WORKSPACES } from "../../../../../../utils/constants";
import { Team, Workspace } from "../../../../../../utils/interfaces";

// @description Create new Project in Team

if (options.workspaces && options.teams) {
	const workspace = options.workspaces as Workspace;
	const team = options.teams as Team;
	const indexPath: string[] = [WORKSPACES, workspace.name, TEAMS, team.name, PROJECTS];
	createProject("team", team.gid, indexPath);
}