import retrieveTasks from "../../../../../../../../common/retrieveTasks";
import { Section, Task } from "../../../../../../../../utils/interfaces";

// @ignore

// @description Get all section tasks

const returnOptions = () => {
	let tasks: Task[] = [];
	if (options.wp_sections) {
		const section = options.wp_sections as Section;
		tasks = retrieveTasks("section", section.gid);
	}
	log(`**********************  TASKS for section ${options.wp_sections.name}  ********************`)
	log(JSON.stringify(tasks));
	return {
		add: tasks
	}
}

export default returnOptions;