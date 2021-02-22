// @description Create new Project in workspace

import createProject from "../../../../common/createProject";
import { Workspace } from "../../../../utils/interfaces";

if (options.workspaces) {
	const workspace = options.workspaces as Workspace;
	createProject("workspace", workspace.gid);
}