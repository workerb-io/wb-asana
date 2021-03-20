<h1 align="center">wb-asana</h1>
<h3 align="center"><a href="https://workerb.io/">workerB</a> package for <a href="https://asana.com/">Asana</a></h3>

## Demo

<div align="center">
  <a href="https://www.youtube.com/watch?v=LUbbxE9YztU">
     <img 
      src="https://user-images.githubusercontent.com/29889620/88480229-5ce5b200-cf72-11ea-803f-c2621d4570d4.png"
      alt="workerb GitHub Package" 
      style="width:100%;"
     >
  </a>
</div>

## How to install

-   Create account on [workerb](https://workerb.io/).
-   Install [workerb extension](https://chrome.google.com/webstore/detail/jdbakbjkiklbibfccegfejjdlcgpnnpe).
-   Add Asana package.
-   Setup Asana package.
-   🚀🚀

## Development

-   To install project dependencies, run `yarn install`.
-   To build the project, run `yarn build` (_production build_).
-   To continuously build the project, run `yarn watch` (_but this will not build new files and folders that you create while developing the project_).
-   Run `yarn build` or `yarn watch` in terminal
-   Log into https://workerb.app.
-   Press `Ctrl + k` to open workerB action bar.
-   Run `dev on` in the workerB action bar.
    ![dev on](assets/dev_on.PNG)
-   Hit Enter to stat the dev mode (_notification will come on top right corner indicating dev mode is on_)
-   Run `loadDir <path>` in the workerB action bar. `path` is the path of the dist folder generated by yarn.
-   For path of your dist folder append `file:///` in the start _in case of windows_
    ![Load Dir](assets/loadDir.PNG)
-   Make sure that you turned `Allow access to file URLs` option for workerB extension.
-   To do that, navigate to `chrome://extension` in your chrome browser and click the `Details` button for workerB extension.

    ![Details button](assets/detailsButton.PNG)

-   Then turn the `Allow access to file URLs` option on
    ![Allow Access To File URL](assets/allowAccessToFileUrls.PNG)
-   After successfully loading your dist location scripts you can start using workerB
    ![dist start](assets/dist_start.PNG)
-   To remove the dist folder and script use `removeDir` command (_notification will come on top right corner indicating taht script is removed_)
    ![removeDir](assets/removeDir.PNG)
-   Hit enter to remove the dist scripts
-   To re index whole scripts again (_used in case of loading new content from APIs or see the logs_) type `reIndex` in workerB action bar.
    ![reIndex](assets/reIndex.PNG)
-   Hit Enter to re index.

## Support

-   [support@workerb.io](mailto:support@workerb.io)
