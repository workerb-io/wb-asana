import { getProjectTasks, getSectionTasks } from "../utils/api";
import { getAPIErrorMessage } from "../utils/helper";
import { DecodedAPIResponse, SectionType, Task, TaskDescription } from "../utils/interfaces";

// gid is based on which type of tasks user wants to retrieve
const retrieveTasks = (type: SectionType, gid: number): Task[] => {
	let tasks: Task[] = [];
	let tasksResponse = <DecodedAPIResponse>{};
	if (type === "project") {
		tasksResponse = getProjectTasks(gid);
	}
	else if (type === "section") {
		tasksResponse = getSectionTasks(gid);
	}
	if (tasksResponse.status === 200) {
		tasks = tasksResponse.response.data;
		tasks = tasks.map(task => {
			return {
				...task,
				description: getTaskDescription(task)
			}
		});
	} else {
		log(getAPIErrorMessage(tasksResponse.response), "#FF5733");
	}
	return tasks;
}

const getTaskDescription = (task: Task): TaskDescription => {
	return task.completed ? "Completed" : "Assigned";
}

export default retrieveTasks;