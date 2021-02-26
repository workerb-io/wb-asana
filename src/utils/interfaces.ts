export type ProjectType = "workspace" | "team";
export type SectionType = "section" | "project";

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
	owner?: string | null;
}

export interface ProjectUpdateData {
	data: ProjectUpdateRequest;
}

export interface User extends Resource {
	permalink_url: string;
}

export interface Section extends Resource {

}

export interface CreateSectionRequest {
	name: string;
	insert_after?: number;
	insert_before?: number;
}

export interface CreateSectionData {
	data: CreateSectionRequest
}

export interface UpdateSectionRequest {
	name: string;
	project: string;
	insert_after?: string;
	insert_before?: string;
}

export interface UpdateSectionData {
	data: UpdateSectionRequest
}

export type TaskDescription = "Scoped" | "Assigned" | "Completed";

export interface Task extends Resource {
	completed: boolean;
	assignee?: string | null;
	description?: TaskDescription
}

export interface UpdateTaskRequest {
	approval_status?: string;
	assignee?: string | null;
	completed?: boolean;
	due_at?: string | null;
	due_on?: string | null;
	liked?: boolean;
	name?: string;
	notes?: string;
	parent?: string | null;
	projects?: string[];
	resource_subtype?: string;
	start_on?: string | null;
	tags?: string[];
	workspace?: string;
}

export interface UpdateTaskData {
	data: UpdateTaskRequest;
}
