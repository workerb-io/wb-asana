import archiveProject from "../../../../../../../common/archiveProject";
import { Project } from "../../../../../../../utils/interfaces";

// @description Archive Project

if (options.projects) {
	const project = options.projects as Project;
	archiveProject(project.gid);
}