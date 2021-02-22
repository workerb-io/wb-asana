import { Project } from "../../../../../utils/interfaces";

// @description Open Project

if (options.projects) {
	const project: Project = options.projects;
	open(project.permalink_url);
}