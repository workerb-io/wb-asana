import { Project } from "../../../../../../../utils/interfaces";

// @description Remove archive option if project already archived

const returnOptions = () => {
	const project = options.projects as Project;
	return JSON.stringify({
		remove: project ? project.archived ? ['archive_project'] : [] : []
	});
}

export default returnOptions;