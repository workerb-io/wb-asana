import retrieveUsers from "../../../../../../common/retrieveUsers";
import { Team, User } from "../../../../../../utils/interfaces";

// @description Get all team users

const returnOptions = () => {
	let users: User[] = [];
	if (options.teams) {
		const team = options.teams as Team;
		users = retrieveUsers("team", team.gid);
	}

	return {
		add: users
	};
}

export default returnOptions;