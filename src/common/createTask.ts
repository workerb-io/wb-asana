import { createWorkspaceTask } from "../utils/api";
import { AddProjectToTaskData, CreateTaskRequestData } from "../utils/interfaces";
import addTaskToProject from "./addTaskToProject";

const createTask = (workspaceId: number, projectId: number, sectionId: number) => {
    let taskName: string | null = args[0];
    if(!taskName) {
        taskName = prompt("Task name");
    }
    if(taskName) {
        const taskData: CreateTaskRequestData = {
            data: {
                name: taskName,
                completed: false,
                workspace: `${workspaceId}`
            }
        };
        const taskResponse = createWorkspaceTask(taskData);
        if(taskResponse.status === 201) {
            notify("Task created successfully", "success", 3000);
            // assigning task to the section
            const taskId = taskResponse.response.data.gid;
            const addProjectData: AddProjectToTaskData = {
                data: {
                    project: `${projectId}`,
                    section: `${sectionId}`
                }
            }
            addTaskToProject(taskId, addProjectData);
        }
    } else {
        notify("Please enter the task name", "error", 3000);
    }
}

export default createTask;