import { Project, Task } from "../../../../../../../../../../../utils/interfaces";

// @description Open Task

if(options.projects && options.tasks) {
    const project = options.projects as Project;
    const task = options.tasks as Task;
    open(`https://app.asana.com/0/${project.gid}/${task.gid}`);
}