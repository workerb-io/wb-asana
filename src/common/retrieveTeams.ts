import { getWorkspaceTeams } from "../utils/api";
import { getAPIErrorMessage } from "../utils/helper";
import { Team } from "../utils/interfaces";

const retrieveTeams = (workspaceId: number): Team[] => {
    let teams: Team[] = [];
    const teamsResponse = getWorkspaceTeams(workspaceId);
    if (teamsResponse.status === 200) {
        teams = teamsResponse.response.data as Team[];
        teams = teams.map(team => ({
            ...team,
            description: `${team.name} team`
        }));
    } else {
        log(getAPIErrorMessage(teamsResponse.response), "#FF5733");
    }
    return teams;
}

export default retrieveTeams;