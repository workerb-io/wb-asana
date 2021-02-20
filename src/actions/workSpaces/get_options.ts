import { getWorkspaces } from "../../utils/api"
import { Workspace } from "../../utils/interfaces"

const returnOptions = () => {
    const { response } = getWorkspaces();
    const workspaceList = response.data as Workspace[];
    const workspaces = workspaceList.map(workspace => ({
        ...workspace,
        description: `${workspace.name} workspace`
    }));

    return {
        add: workspaces
    };
}

export default returnOptions;
