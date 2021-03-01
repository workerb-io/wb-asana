import completeTask from "../../../../../../../../../common/completeTask";
import { Task } from "../../../../../../../../../utils/interfaces";

// @description Complete Task

if (options.tasks) {
	const task = options.tasks as Task;
	completeTask(task);
}