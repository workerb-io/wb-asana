import { updateTask } from "../utils/api";
import { getAPIErrorMessage } from "../utils/helper";
import { Task, UpdateTaskData } from "../utils/interfaces";

const completeTask = (task: Task) => {
    if (!task.completed) {
		const taskData: UpdateTaskData = {
			data: {
				completed: true
			}
		}
		const taskResponse = updateTask(task.gid, taskData);
		if (taskResponse.status === 200) {
			notify("Task updated successfully", "success", 3000);
		} else {
			notify(getAPIErrorMessage(taskResponse.response), "error", 3000);
		}
	} else {
		notify("Task is already completed", "error", 3000);
	}
}

export default completeTask;