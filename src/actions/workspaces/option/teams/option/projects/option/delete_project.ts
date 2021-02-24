import removeProject from "../../../../../../../common/removeProject";
import { Project } from "../../../../../../../utils/interfaces";

// @description Delete Project

if (options.projects) {
	const project = options.projects as Project;
	removeProject(project.gid);
}