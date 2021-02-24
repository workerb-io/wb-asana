import { ACCESS_TOKEN } from "./constants";
import { decodeApiResponse, getUrl } from "./helper";
import { CreateSectionData, DecodedAPIResponse, ProjectRequestData, ProjectUpdateData } from "./interfaces";

const RESOURCE_OPTIONS: string[] = ["gid", "name", "resource_type"];
const WORKSPACE_OPTIONS: string = [...RESOURCE_OPTIONS, "is_organization"].join(",");
const TEAM_OPTIONS: string = [...RESOURCE_OPTIONS, "permalink_url"].join(",");
const PROJECT_OPTIONS: string = [...RESOURCE_OPTIONS, "permalink_url", "notes", "icon", "archived"].join(",");

export const getWorkspaces = (): DecodedAPIResponse => {
    log(ACCESS_TOKEN);
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

export const getWorkspaceProjects = (workspaceId: number): DecodedAPIResponse => {
    return decodeApiResponse(
        httpGet(getUrl(`/workspaces/${workspaceId}/projects?opt_fields=${PROJECT_OPTIONS}&limit=10`), {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        })
    );
}

export const getTeamUsers = (teamId: number): DecodedAPIResponse => {
    return decodeApiResponse(
        httpGet(getUrl(`/teams/${teamId}/users?limit=10`), {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        })
    );
}

export const createProject = (projectData: ProjectRequestData): DecodedAPIResponse => {
    return decodeApiResponse(
        httpPost(getUrl(`/projects`), projectData, {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        })
    );
}

export const createProjectInWorkspace = (workspaceId: number, projectData: ProjectRequestData): DecodedAPIResponse => {
    return decodeApiResponse(
        httpPost(getUrl(`/workspaces/${workspaceId}/projects`), JSON.stringify(projectData), {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        })
    )
}

export const createProjectInTeam = (teamId: number, projectData: ProjectRequestData): DecodedAPIResponse => {
    return decodeApiResponse(
        httpPost(getUrl(`/teams/${teamId}/projects`), JSON.stringify(projectData), {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        })
    );
}

export const updateProject = (projectId: number, projectData: ProjectUpdateData): DecodedAPIResponse => {
    return decodeApiResponse(
        httpPut(getUrl(`/projects/${projectId}`), JSON.stringify(projectData), {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        })
    )
}

export const deleteProjectFromAll = (projectId: number): DecodedAPIResponse => {
    return decodeApiResponse(
        httpDelete(getUrl(`/projects/${projectId}`), {}, {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        })
    );
}

export const getProjectSections = (projectId: number): DecodedAPIResponse => {
    return decodeApiResponse(
        httpGet(getUrl(`/projects/${projectId}/sections`), {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }),
    );
}

export const createProjectSection = (projectId: number, sectionData: CreateSectionData): DecodedAPIResponse => {
    return decodeApiResponse(
        httpPost(getUrl(`/projects/${projectId}/sections`), JSON.stringify(sectionData), {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        })
    );
}
