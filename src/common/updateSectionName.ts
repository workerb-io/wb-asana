import { updateSection } from "../utils/api";
import { getAPIErrorMessage } from "../utils/helper";
import { Section, UpdateSectionData } from "../utils/interfaces";

const updateSectionName = (section: Section, indexPath = []) => {
    let sectionName: string | null = args[0];

	if (!sectionName) {
		sectionName = prompt('New Section Name');
	}

	if (sectionName) {
		const sectionData: UpdateSectionData = {
			data: {
				name: sectionName
			}
		};
		let sectionResponse = updateSection(section.gid, sectionData);
		if (sectionResponse.status === 200) {
			// reIndex(indexPath);
			notify("Section updated successfully", "success", 3000);
		} else {
			notify(getAPIErrorMessage(sectionResponse.response), "error", 3000);
		}
	} else {
		notify("Please enter the section name", "error", 3000);
	}
}

export default updateSectionName;