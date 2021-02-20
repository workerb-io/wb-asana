export interface DecodedAPIResponse {
	response: any;
	status: number;
}

export interface Workspace {
	gid: number;
	name: string;
	resource_type: string;
	is_organization: boolean;
}

export interface Team {
	gid: number;
	name: string;
	resource_type: string;
	permalink_url: string;
	description?: string;
}