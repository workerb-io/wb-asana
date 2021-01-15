import { accessToken } from "./constants"
import { decodeApiResponse, DecodedAPIResponse, getUrl } from "./helper"

export const getWorkspaces = (): DecodedAPIResponse => {
    return decodeApiResponse(
        httpGet(getUrl("/workspaces?limit=10"), {
            Authorization: `Bearer ${accessToken}` 
        })
    )
}

export const getWorkspacesProjects = (workspaceId: number): DecodedAPIResponse => {
    return decodeApiResponse(
        httpGet(getUrl(`/workspaces/${workspaceId}/projects?opt_fields=gid,name&limit=10`), {
            Authorization: `Bearer ${accessToken}` 
        })
    )
}
