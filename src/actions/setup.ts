// @description Setup the asana automation package
open("https://app.asana.com/0/developer-console");

const currentURL = readURL();

if(currentURL.indexOf("login") === -1) {
    // user already logged in
    click('New access token');

    const tokenName: string = `workerb-${new Date().getTime()}`;

    type(tokenName, 'What will this token be used for?', { method: 'by_placeholder' });

    //@ts-ignore
    click('I agree to the API terms and conditions', { method: 'by_label' });
    click('Create token');

    const token = read('.CopyTextbox-text', { method: 'by_query_selector' });

    notify(token, "success", 3000);

    if (!token) {
        notify("Empty token", "error", 3000)
    } else {
        setVars([
            {
                name: 'asanaAccessToken',
                value: token,
            },
        ], { local: true });
        notify('Access token added successfully', 'success', 4000);
        reIndex([]);
    }
} else {
    // notify user not logged in
    notify("Please login into your Asana account", "error", 3000);
}