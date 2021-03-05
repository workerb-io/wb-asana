import createTask from "../../../../../../../../../common/createTask";
import { PROJECTS, SECTIONS, TASKS, TEAMS, WORKSPACES } from "../../../../../../../../../utils/constants";
import { Project, Section, Team, Workspace } from "../../../../../../../../../utils/interfaces";

// @description Create new task

if(options.workspaces && options.projects && options.sections) {
    const workspace = options.workspaces as Workspace;
	const team = options.teams as Team;
	const project = options.projects as Project;
	const section = options.sections as Section;
	const indexPath: string[] = [WORKSPACES, workspace.name, TEAMS, team.name, PROJECTS, project.name, SECTIONS, section.name, TASKS];
    createTask(workspace.gid, project.gid, section.gid, indexPath);
}