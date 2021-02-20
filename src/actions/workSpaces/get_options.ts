import { getWorkspaces } from "../../utils/api"
import { Workspace } from "../../utils/interfaces"

const returnOptions = () => {
    const { response } = getWorkspaces();
    const workspaces = response.data as Workspace[];

    return {
        add: workspaces.map(
            (workspace: Workspace) => ({
                ...workspace,
                description: `${workspace.name} workspace`
            })
        )
    };
}

export default returnOptions;
