import { getTeamUsers } from "../utils/api";
import { getAPIErrorMessage } from "../utils/helper";
import { DecodedAPIResponse, User, UserType } from "../utils/interfaces";

const retrieveUsers = (type: UserType, gid: number): User[] => {
    let users: User[] = [];
    let usersResponse = <DecodedAPIResponse>{};
    if(type === "team") {
        usersResponse = getTeamUsers(gid);
    }

    if (usersResponse.status === 200) {
        users = usersResponse.response.data;
    } else {
        log(getAPIErrorMessage(usersResponse.response), "#FF5733");
    }

    return users;
}

export default retrieveUsers;