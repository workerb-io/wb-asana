import { Project } from "../../../../../utils/interfaces";
import removeProject from "../../../../../common/removeProject";

// @description Delete Project

if (options.projects) {
	const project = options.projects as Project;
	removeProject(project.gid);
}