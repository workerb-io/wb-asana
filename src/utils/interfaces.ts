export interface ErrorResponse {
	message: string;
	phrase: string;
}

export interface DecodedAPIResponse {
	response: any;
	status: number;
}

export interface Resource {
	gid: number;
	name: string;
	resource_type: string;
}

export interface Workspace extends Resource {
	is_organization: boolean;
}

export interface Team extends Resource {
	permalink_url: string;
	description?: string;
}

export interface Project extends Resource {
	permalink_url: string;
	archived?: boolean;
	color?: string | null;
	notes?: string;
	icon?: string | null;
}

export interface ProjectRequest {
	name: string;
	archived: boolean;
	color?: string | null;
	notes: string;
	public?: boolean;
	team?: any;
}

export interface ProjectRequestData {
	data: ProjectRequest
}

export interface ProjectUpdateRequest {
	name?: string;
	archived?: boolean;
	color?: string | null;
	notes?: string;
	public?: boolean;
	team?: any;
}

export interface ProjectUpdateData {
	data: ProjectUpdateRequest;
}

export interface User extends Resource {
	permalink_url: string;
}