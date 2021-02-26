import retrieveProjects from "../../../../common/retrieveProjects";
import { Project, Workspace } from "../../../../utils/interfaces";

// @description Get all workspace projects

const returnOptions = () => {
	let projects: Project[] = [];
	log("WORKSPACE GET PROJECTS")
	log(JSON.stringify(options));
	if (options.workspaces) {
		const workspace = options.workspaces as Workspace;
		projects = retrieveProjects("workspace", workspace.gid);
	}

	return {
		add: projects
	};
}

export default returnOptions;