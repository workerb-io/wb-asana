import completeTask from "../../../../../../../../../../../common/completeTask";
import { PROJECTS, SECTIONS, TASKS, TEAMS, WORKSPACES } from "../../../../../../../../../../../utils/constants";
import { Project, Section, Task, Team, Workspace } from "../../../../../../../../../../../utils/interfaces";

// @description Complete Task

if (options.tasks) {
	const workspace = options.workspaces as Workspace;
	const team = options.teams as Team;
	const project = options.projects as Project;
	const section = options.sections as Section;
	const task = options.tasks as Task;
	const indexPath: string[] = [WORKSPACES, workspace.name, TEAMS, team.name, PROJECTS, project.name, SECTIONS, section.name, TASKS];
	completeTask(task, indexPath);
}