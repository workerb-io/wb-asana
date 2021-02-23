import { Project } from "../../../../../utils/interfaces";
import deleteProject from "../../../../../common/deleteProject";

// @description Delete Project

if (options.projects) {
	const project = options.projects as Project;
	deleteProject(project.gid);
}