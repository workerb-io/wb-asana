// @description Create new Project in Team

import createProject from "../../../../../../common/createProject";
import { Team } from "../../../../../../utils/interfaces";

if (options.teams) {
	const team = options.teams as Team;
	createProject("team", team.gid);
}