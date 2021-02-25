import createProject from "../../../../common/createProject";
import { PROJECTS, WORKSPACES } from "../../../../utils/constants";
import { Workspace } from "../../../../utils/interfaces";

// @description Create new Project in workspace

if (options.workspaces) {
	const workspace = options.workspaces as Workspace;
	const indexPath: string[] = [WORKSPACES, workspace.name, PROJECTS];
	createProject("workspace", workspace.gid, indexPath);
}