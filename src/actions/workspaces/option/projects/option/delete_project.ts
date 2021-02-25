import { Project, Workspace } from "../../../../../utils/interfaces";
import removeProject from "../../../../../common/removeProject";
import { PROJECTS, WORKSPACES } from "../../../../../utils/constants";

// @description Delete Project

if (options.workspaces && options.projects) {
	const workspace = options.workspaces as Workspace
	const project = options.projects as Project;
	const indexPath: string[] = [WORKSPACES, workspace.name, PROJECTS];
	removeProject(project.gid, indexPath);
}