import { deleteSection } from "../utils/api";
import { getAPIErrorMessage } from "../utils/helper";

const removeSection = (sectionId: number, indexPath: string[]) => {
	const deleteResponse = deleteSection(sectionId);
	if (deleteResponse.status === 200) {
		// reIndex(indexPath);
		notify("Successfully deleted the section", "success", 3000);
	} else {
		notify(getAPIErrorMessage(deleteResponse.response), "error", 3000);
	}
}

export default removeSection;