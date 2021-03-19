// @description Logout from asana automation package

setVars([
    {
        name: 'asanaAccessToken',
        value: '',
    },
], { local: true });
notify('Access token removed successfully', 'success', 3000);
reIndex([]);