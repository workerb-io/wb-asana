import createTask from "../../../../../../../common/createTask";
import { Project, Section, Workspace } from "../../../../../../../utils/interfaces";

// @description Create new task

if(options.workspaces && options.projects && options.sections) {
    const workspace = options.workspaces as Workspace;
    const project = options.projects as Project;
    const section = options.sections as Section;
    createTask(workspace.gid, project.gid, section.gid);
}