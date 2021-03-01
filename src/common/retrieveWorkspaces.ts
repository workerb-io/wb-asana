import { getWorkspaces } from "../utils/api";
import { getAPIErrorMessage } from "../utils/helper";
import { Workspace } from "../utils/interfaces";

const retrieveWorkspaces = (): Workspace[] => {
    let workspaces: Workspace[] = [];
    const workspacesResponse = getWorkspaces();
    if(workspacesResponse.status === 200) {
        workspaces = workspacesResponse.response.data;
        workspaces = workspaces.map(workspace => ({
            ...workspace,
            description: `${workspace.name} workspace`
        }));
    } else {
        log(getAPIErrorMessage(workspacesResponse.response), "#FF5733");
    }
    return workspaces;
}

export default retrieveWorkspaces;