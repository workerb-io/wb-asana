import retrieveWorkspaces from "../../common/retrieveWorkspaces";

const returnOptions = () => {

    const workspaces = retrieveWorkspaces();

    return {
        add: workspaces
    };
}

export default returnOptions;
