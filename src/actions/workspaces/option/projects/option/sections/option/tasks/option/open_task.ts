import { Task } from "../../../../../../../../../utils/interfaces";

// @description Open Task

if(options.tasks) {
    const task = options.tasks as Task;
    open(task.permalink_url);
}