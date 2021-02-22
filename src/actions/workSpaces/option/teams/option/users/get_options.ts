import { getTeamUsers } from "../../../../../../utils/api";
import { getAPIErrorMessage } from "../../../../../../utils/helper";
import { Team, User } from "../../../../../../utils/interfaces";

// @description Get all team users

const returnOptions = () => {
	let users: User[] = [];
	if (options.teams) {
		const team = options.teams as Team;
		const usersResponse = getTeamUsers(team.gid);
		if (usersResponse.status === 200) {
			users = usersResponse.response.data;
		} else {
			log(getAPIErrorMessage(usersResponse.response), "#FF5733");
		}
	}

	return {
		add: users
	};
}

export default returnOptions;