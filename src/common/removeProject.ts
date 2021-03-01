import { deleteProjectFromAll } from "../utils/api";
import { getAPIErrorMessage } from "../utils/helper";

const removeProject = (projectId: number, indexPath: string[]) => {
	const deleteResponse = deleteProjectFromAll(projectId);
	if (deleteResponse.status === 200) {
		reIndex(indexPath);
		notify("Successfully deleted the project", "success", 3000);
	} else {
		notify(getAPIErrorMessage(deleteResponse.response), "error", 3000);
	}
}

export default removeProject;