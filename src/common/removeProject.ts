import { deleteProjectFromAll } from "../utils/api";
import { getAPIErrorMessage } from "../utils/helper";

const removeProject = (projectId: number) => {
	const deleteResponse = deleteProjectFromAll(projectId);
	if (deleteResponse.status === 200) {
		notify("Successfully deleted the project", "success", 3000);
	} else {
		notify(getAPIErrorMessage(deleteResponse.response), "error", 3000);
	}
}

export default removeProject;