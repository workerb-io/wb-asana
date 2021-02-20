import { ACCESS_TOKEN } from "./constants";
import { decodeApiResponse, getUrl } from "./helper";
import { DecodedAPIResponse } from "./interfaces";

export const getWorkspaces = (): DecodedAPIResponse => {
    return decodeApiResponse(
        httpGet(getUrl("/workspaces?limit=10"), {
            Authorization: `Bearer ${ACCESS_TOKEN}` 
        })
    )
}

export const getWorkspacesProjects = (workspaceId: number): DecodedAPIResponse => {
    return decodeApiResponse(
        httpGet(getUrl(`/workspaces/${workspaceId}/projects?opt_fields=gid,name&limit=10`), {
            Authorization: `Bearer ${ACCESS_TOKEN}` 
        })
    )
}
