import { createProjectSection } from "../utils/api";
import { getAPIErrorMessage } from "../utils/helper";
import { CreateSectionData } from "../utils/interfaces";

const createSection = (projectId: number, indexPath: string[]) => {
	let sectionName: string | null = args[0];

	if (!sectionName) {
		sectionName = prompt('Section Name');
	}

	if (sectionName) {
		const sectionData: CreateSectionData = {
			data: {
				name: sectionName
			}
		};
		let sectionResponse = createProjectSection(projectId, sectionData);
		if (sectionResponse.status === 201) {
			// reIndex(indexPath);
			notify("Section created successfully", "success", 3000);
		} else {
			notify(getAPIErrorMessage(sectionResponse.response), "error", 3000);
		}
	} else {
		notify("Please enter the section name", "error", 3000);
	}
}

export default createSection;