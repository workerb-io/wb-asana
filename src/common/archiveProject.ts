import { updateProject } from "../utils/api";
import { getAPIErrorMessage } from "../utils/helper";
import { ProjectUpdateData } from "../utils/interfaces";

const archiveProject = (projectId: number, indexPath: string[]) => {
	const projectUpdateData: ProjectUpdateData = {
		data: {
			archived: true
		}
	};
	const projectUpdateResponse = updateProject(projectId, projectUpdateData);
	if (projectUpdateResponse.status === 200) {
		reIndex(indexPath);
		notify("Project archived successfully", "success", 3000);
	} else {
		notify(getAPIErrorMessage(projectUpdateResponse.response), "error", 3000);
	}
}

export default archiveProject;