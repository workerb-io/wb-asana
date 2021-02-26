// @description Get all project sections

import retrieveSections from "../../../../../../common/retrieveSections";
import { Project, Section } from "../../../../../../utils/interfaces";

const returnOptions = () => {
	let sections: Section[] = [];
	log("SECTION GET ALL")
	log(JSON.stringify(options));
	if (options.workspace_projects) {
		const project = options.workspace_projects as Project;
		sections = retrieveSections(project.gid);
	}
	log(`**********************  SECTIONS for project ${options.workspace_projects.name}  ********************`)
	log(JSON.stringify(sections));
	return {
		add: sections
	};
}

export default returnOptions;