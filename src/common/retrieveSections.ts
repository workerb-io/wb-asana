import { getProjectSections } from "../utils/api";
import { getAPIErrorMessage } from "../utils/helper";
import { Section } from "../utils/interfaces"

const retrieveSections = (projectId: number): Section[] => {
	let sections: Section[] = [];
	let sectionsResponse = getProjectSections(projectId);
	if (sectionsResponse.status === 200) {
		sections = sectionsResponse.response.data as Section[];
		sections = sections.map((section: Section): Section=> {
			return {
				gid: section.gid,
				name: section.name,
				resource_type: section.resource_type
			}
		});
	} else {
		log(getAPIErrorMessage(sectionsResponse.response), "#FF5733");
	}
	return sections;
}

export default retrieveSections;