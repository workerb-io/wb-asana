import archiveProject from "../../../../../common/archiveProject";
import { PROJECTS, WORKSPACES } from "../../../../../utils/constants";
import { Project, Workspace } from "../../../../../utils/interfaces";

// @description Archive Project

if (options.workspaces && options.workspace_projects) {
	const workspace = options.workspaces as Workspace;
	const project = options.workspace_projects as Project;
	const indexPath: string[] = [WORKSPACES, workspace.name, PROJECTS];
	archiveProject(project.gid, indexPath);
}