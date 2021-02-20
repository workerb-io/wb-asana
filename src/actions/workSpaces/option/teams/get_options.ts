import { getWorkspaceTeams } from "../../../../utils/api";
import { Team, Workspace } from "../../../../utils/interfaces";

const returnOptions = () => {
	let teams: Team[] = [];
	if (options.workspaces) {
		const workspace = options.workspaces as Workspace;
		const teamsResponse = getWorkspaceTeams(workspace.gid);
		if (teamsResponse.status === 200) {
			teams = teamsResponse.response.data as Team[];
			teams = teams.map(team => ({
				...team,
				description: `${team.name} team`
			}));
		} else {
			// Handle API Errors
			log(`TEAMS NOT FOUND FOR WORKSPACE ${JSON.stringify(workspace)}`, "#FF5733");
		}
	}

	return {
		add: teams
	};
}

export default returnOptions;
