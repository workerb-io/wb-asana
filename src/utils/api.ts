import { ACCESS_TOKEN } from "./constants";
import { decodeApiResponse, getUrl } from "./helper";
import { DecodedAPIResponse } from "./interfaces";

const RESOURCE_OPTIONS: string[] = ["gid", "name", "resource_type"];
const WORKSPACE_OPTIONS: string = [...RESOURCE_OPTIONS, "is_organization"].join(",");
const TEAM_OPTIONS: string = [...RESOURCE_OPTIONS, "permalink_url"].join(",");
const PROJECT_OPTIONS: string = [...RESOURCE_OPTIONS, "permalink_url", "notes", "icon"].join(",");

export const getWorkspaces = (): DecodedAPIResponse => {
    return decodeApiResponse(
        httpGet(getUrl(`/workspaces?opt_fields=${WORKSPACE_OPTIONS}&limit=10`), {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        })
    );
}

export const getWorkspaceTeams = (workspaceId: number): DecodedAPIResponse => {
    return decodeApiResponse(
        httpGet(getUrl(`/organizations/${workspaceId}/teams?opt_fields=${TEAM_OPTIONS}&limit=10`), {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        })
    );
}

export const getTeamProjects = (teamId: number): DecodedAPIResponse => {
    return decodeApiResponse(
        httpGet(getUrl(`/teams/${teamId}/projects?opt_fields=${PROJECT_OPTIONS}&limit=10`), {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        })
    );
}
