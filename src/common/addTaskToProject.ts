import { addProjectToTask } from "../utils/api";
import { getAPIErrorMessage } from "../utils/helper";
import { AddProjectToTaskData } from "../utils/interfaces";

const addTaskToProject = (taskId: number, addProjectData: AddProjectToTaskData, indexPath: string[] = []) => {
    const taskResponse = addProjectToTask(taskId, addProjectData);
    if(taskResponse.status === 200) {
        reIndex(indexPath);
        notify("Task added to section successfully", "success", 3000);
    } else {
        notify(getAPIErrorMessage(taskResponse.response), "error", 3000);
    }
}

export default addTaskToProject;