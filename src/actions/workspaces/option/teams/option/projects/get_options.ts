import retrieveProjects from "../../../../../../common/retrieveProjects";
import { Project, Team } from "../../../../../../utils/interfaces";

// @description Get all team projects

const returnOptions = () => {
	let projects: Project[] = [];
	if (options.teams) {
		const team = options.teams as Team;
		projects = retrieveProjects("team", team.gid);
	}

	return {
		add: projects
	};
}

export default returnOptions;