import retrieveTeams from "../../../../common/retrieveTeams";
import { Team, Workspace } from "../../../../utils/interfaces";

const returnOptions = () => {
	let teams: Team[] = [];
	if (options.workspaces) {
		const workspace = options.workspaces as Workspace;
		teams = retrieveTeams(workspace.gid);
	}

	return {
		add: teams
	};
}

export default returnOptions;
