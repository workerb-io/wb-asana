import createSection from "../../../../../../common/createSection";
import { PROJECTS, SECTIONS, WORKSPACES } from "../../../../../../utils/constants";
import { Project, Workspace } from "../../../../../../utils/interfaces";

// @description Create new section

if (options.workspaces && options.projects) {
	const workspace = options.workspaces as Workspace;
	const project = options.projects as Project;
	const indexPath: string[] = [WORKSPACES, workspace.name, PROJECTS, project.name, SECTIONS];
	createSection(project.gid, indexPath);
}