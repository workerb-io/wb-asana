import completeTask from "../../../../../../../../../common/completeTask";
import { PROJECTS, SECTIONS, TASKS, WORKSPACES } from "../../../../../../../../../utils/constants";
import { Project, Section, Task, Workspace } from "../../../../../../../../../utils/interfaces";

// @description Complete Task

if (options.tasks) {
	const task = options.tasks as Task;
	const workspace = options.workspaces as Workspace;
    const project = options.projects as Project;
    const section = options.sections as Section;
    const indexPath: string[] = [WORKSPACES, workspace.name, PROJECTS, project.name, SECTIONS, section.name, TASKS];
	completeTask(task, indexPath);
}