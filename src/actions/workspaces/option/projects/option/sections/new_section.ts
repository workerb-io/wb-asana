import createSection from "../../../../../../common/createSection";
import { Project } from "../../../../../../utils/interfaces";

// @description Create new section in project

if (options.projects) {
	const project = options.projects as Project;
	createSection(project.gid);
}