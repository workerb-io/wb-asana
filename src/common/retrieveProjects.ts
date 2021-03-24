import { getTeamProjects, getWorkspaceProjects } from "../utils/api";
import { getAPIErrorMessage } from "../utils/helper";
import { DecodedAPIResponse, Project, ProjectType } from "../utils/interfaces"

// gid can be workspaceid or teamid

const retrieveProjects = (type: ProjectType, gid: number): Project[] => {
	let projects: Project[] = [];
	let projectsResponse = <DecodedAPIResponse>{};
	if (type === "workspace") {
		projectsResponse = getWorkspaceProjects(gid);
	}
	if (type === "team") {
		projectsResponse = getTeamProjects(gid);
	}
	if (projectsResponse.status === 200) {
		projects = projectsResponse.response.data as Project[];
		projects = projects.map(project => {
			delete project.icon;
			return ({
				...project,
				description: getProjectDescription(project)
			});
		});
	} else {
		log(getAPIErrorMessage(projectsResponse.response), "#FF5733");
	}
	return projects;
}

const getProjectDescription = (project: Project) => {
	let description = project.notes ? project.notes : project.name;
	description += ` ${project.archived ? "(Archived)" : ""}`;
	return description;
}


export default retrieveProjects;