import { Workspace } from "../../../utils/interfaces";

// @description Add/Remove team based on Workspace type

const returnOptions = () => {
	const workspace = options.workspaces as Workspace;
	return JSON.stringify({
		remove: workspace ? workspace.is_organization ? ['projects'] : ['teams'] : []
	});
}

export default returnOptions