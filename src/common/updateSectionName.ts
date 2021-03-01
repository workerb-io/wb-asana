import { updateSection } from "../utils/api";
import { getAPIErrorMessage } from "../utils/helper";
import { UpdateSectionData } from "../utils/interfaces";

const updateSectionName = (sectionId: number, indexPath:string[] = []) => {
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
		let sectionResponse = updateSection(sectionId, sectionData);
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