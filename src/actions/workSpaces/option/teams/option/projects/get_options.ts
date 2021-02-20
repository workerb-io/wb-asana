import { getTeamProjects } from "../../../../../../utils/api";
import { Project, Team } from "../../../../../../utils/interfaces";

const returnOptions = () => {
	let projects: Project[] = [];
	if (options.teams) {
		const team = options.teams as Team;
		const projectsResponse = getTeamProjects(team.gid);
		if (projectsResponse.status === 200) {
			projects = projectsResponse.response.data as Project[];
			projects = projects.map(project => ({
				...project,
				description: project.notes ? project.notes : project.name
			}));
		} else {
			// Handle API Errors
			log(`PROJECTS NOT FOUND FOR TEAM ${JSON.stringify(team)}`, "#FF5733");
		}
	}

	return {
		add: projects
	};
}

export default returnOptions;