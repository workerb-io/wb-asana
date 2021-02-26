import removeSection from "../../../../../../../common/removeSection";
import { PROJECTS, SECTIONS, WORKSPACES } from "../../../../../../../utils/constants";
import { Project, Section, Workspace } from "../../../../../../../utils/interfaces";

// @description Delete Section

if (options.workspaces && options.wp_sections) {
	const workspace = options.workspaces as Workspace;
	const project = options.workspace_projects as Project;
	const section = options.wp_sections as Section;
	const indexPath: string[] = [WORKSPACES, workspace.name, PROJECTS, project.name, SECTIONS];
	removeSection(section.gid, indexPath);
}