import updateSectionName from "../../../../../../../common/updateSectionName";
import { PROJECTS, SECTIONS, WORKSPACES } from "../../../../../../../utils/constants";
import { Project, Section, Workspace } from "../../../../../../../utils/interfaces";

// @description Update section name

if(options.sections) {
    const workspace = options.workspaces as Workspace;
	const project = options.projects as Project;
    const section = options.sections as Section;
    const indexPath: string[] = [WORKSPACES, workspace.name, PROJECTS, project.name, SECTIONS];
    updateSectionName(section.gid, indexPath);
}