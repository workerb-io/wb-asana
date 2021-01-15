import { getWorkspaces } from "../../utils/api"

interface Workspace {
    gid: number
    name: string
    resource_type: string
}

const returnOptions = () => {
    const { response } = getWorkspaces()

    return {
        add: response.data.map(
            (workspace: Workspace) => ({
                ...workspace,
                description: `${workspace.name} workspace`
            })
        )
    }
}

export default returnOptions
