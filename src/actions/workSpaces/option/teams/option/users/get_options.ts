import { getTeamUsers } from "../../../../../../utils/api";
import { Team, User } from "../../../../../../utils/interfaces";

const returnOptions = () => {
	let users: User[] = [];
	if (options.teams) {
		const team = options.teams as Team;
		const usersResponse = getTeamUsers(team.gid);
		if (usersResponse.status === 200) {
			users = usersResponse.response.data;
		} else {
			// Handle API Errors
			log(`USERS NOT FOUND FOR TEAM ${JSON.stringify(team)}`, "#FF5733");
		}
	}

	return {
		add: users
	};
}

export default returnOptions;