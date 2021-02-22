import { createProjectInTeam, createProjectInWorkspace } from "../utils/api";
import { WORKSPACES } from "../utils/constants";
import { getAPIErrorMessage } from "../utils/helper";
import { DecodedAPIResponse, ErrorResponse, ProjectRequestData } from "../utils/interfaces";

const createProject = (projectType: 'workspace' | 'team', gid: number) => {
	let projectName: string | null = args[0]
	let isPublic = true;
	let isArchived = false;
	let projectNotes = "";

	if (!projectName) {
		projectName = prompt('Project Name');
	}

	if (projectName) {
		const projectData: ProjectRequestData = {
			data: {
				name: projectName,
				archived: isArchived,
				notes: projectNotes
			}
		}
		let projectResponse = <DecodedAPIResponse>{};
		if (projectType === "workspace") {
			projectResponse = createProjectInWorkspace(gid, projectData);
		}
		if (projectType === "team") {
			projectResponse = createProjectInTeam(gid, projectData);
		}
		if (projectResponse.status === 201) {
			reIndex([WORKSPACES]);
			notify("Project Created Successfully", "success", 3000);
		} else {
			notify(getAPIErrorMessage(projectResponse.response), "error", 3000);
		}
	} else {
		notify("Please enter the project name", "error", 3000);
	}
}

export default createProject;