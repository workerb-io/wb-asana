import retrieveSections from "../../../../../../common/retrieveSections";
import { Project, Section } from "../../../../../../utils/interfaces";

// @description Get all project sections

const returnOptions = () => {
	let sections: Section[] = [];

	if (options.projects) {
		const project = options.projects as Project;
		sections = retrieveSections(project.gid);
	}

	return {
		add: sections
	};
}

export default returnOptions;