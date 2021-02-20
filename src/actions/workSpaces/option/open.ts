import { Workspace } from "../../../utils/interfaces"

// @description Open Workspace

if (options.workspaces) {
    const workspace = options.workspaces as Workspace;
    open(`https://app.asana.com/0/home/${workspace.gid}`);
}