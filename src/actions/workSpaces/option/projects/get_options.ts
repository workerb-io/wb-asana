import { getWorkspacesProjects } from "../../../../utils/api"

interface Project {
    gid: number
    name: string
}

log(options)

const returnOptions = () => {
    const { response } = getWorkspacesProjects(options.workSpaces.gid)

    return {
        add: response.data.map(
            (project: Project) => ({
                ...project,
                description: `${project.name} workspace`
            })
        )
    }
}

export default returnOptions

