import retrieveTasks from "../../../../../../../../../../common/retrieveTasks";
import { Section, Task } from "../../../../../../../../../../utils/interfaces";

// @description Get all tasks in a section

const returnOptions = () => {
	let tasks: Task[] = [];
	
	if (options.sections) {
		const section = options.sections as Section;
		tasks = retrieveTasks("section", section.gid);
	}

	return {
		add: tasks
	};
}

export default returnOptions;