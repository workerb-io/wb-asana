import { ACCESS_TOKEN } from "./constants";
import { decodeApiResponse, getUrl } from "./helper";
import { DecodedAPIResponse } from "./interfaces";

export const getWorkspaces = (): DecodedAPIResponse => {
    return decodeApiResponse(
        httpGet(getUrl("/workspaces?opt_fields=gid,name,resource_type,is_organization&limit=10"), {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        })
    );
}

export const getWorkspaceTeams = (workspaceId: number): DecodedAPIResponse => {
    return decodeApiResponse(
        httpGet(getUrl(`/organizations/${workspaceId}/teams?opt_fields=gid,name,resource_type,permalink_url&limit=10`), {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        })
    );
}

export const getWorkspacesProjects = (workspaceId: number): DecodedAPIResponse => {
    return decodeApiResponse(
        httpGet(getUrl(`/workspaces/${workspaceId}/projects?opt_fields=gid,name&limit=10`), {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        })
    );
}
