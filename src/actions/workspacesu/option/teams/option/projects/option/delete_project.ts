import deleteProject from "../../../../../../../common/deleteProject";
import { Project } from "../../../../../../../utils/interfaces";

// @description Delete Project

if (options.projects) {
	const project = options.projects as Project;
	deleteProject(project.gid);
}