import { Team } from "../../../../../utils/interfaces";

// @description Open Team

if (options.teams) {
	const team: Team = options.teams;
	open(team.permalink_url);
}