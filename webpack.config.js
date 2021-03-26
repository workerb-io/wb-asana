
const path = require('path')
const helpers = require('./webpack.helpers.js');
const WBMetaJsonGenerator = require("wb-packager-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");


const fileSystem = helpers.generateFS(__dirname + '/src/actions', "workerB");

const entryFiles = helpers.generateEntryPaths(fileSystem.children);

const mode = process.argv.filter(val => val.includes("--mode"));
let environment = "production";
if(mode.length > 0 && mode[0].includes("dev")) {
  environment = "development";
}

const entryPaths = helpers.getFiles(entryFiles, ".ts").map(file => file.replace('.ts', ''));

const folderDescriptionList = [
    {
        path: "/workspaces", 
        description: "Display all the workspaces",
        iconPath: "src/actions/workspaces/workspace_icons/workspace.png",
        defaultAction: "open"
    },
    {
        path: "/workspaces/option/teams",
        description: "Display all the teams",
        iconPath: "src/actions/workspaces/option/teams/team_icons/teams.png",
        defaultAction: "open"
    },
    {
        path: "/workspaces/option/teams/option/projects",
        description: "Display all team projects",
        iconPath: "src/actions/workspaces/option/teams/option/projects/project_icons/project.png",
        defaultAction: "open"
    },
    {
        path: "/workspaces/option/teams/option/users",
        description: "Display all users of the team",
        iconPath: "src/actions/workspaces/option/teams/option/users/user_icons/users.png"
    },
    {
        path: "/workspaces/option/teams/option/projects/option/sections",
        description: "Display all sections in project",
        iconPath: "src/actions/workspaces/option/teams/option/projects/option/sections/section_icons/section.png",
        defaultAction: "create_task"
    },
    {
        path: "/workspaces/option/teams/option/projects/option/sections/option/tasks",
        description: "Display all tasks",
        iconPath: "src/actions/workspaces/option/teams/option/projects/option/sections/option/tasks/task_icons/tasks.png",
        defaultAction: "open_task"
    },
    {
        path: "/workspaces/option/projects",
        description: "Display all projects",
        iconPath: "src/actions/workspaces/option/projects/project_icons/project.png",
        defaultAction: "open"
    },
    {
        path: "/workspaces/option/projects/option/sections",
        description: "Display all sections",
        iconPath: "src/actions/workspaces/option/projects/option/sections/section_icons/section.png",
        defaultAction: "create_task"
    },
    {
        path: "/workspaces/option/projects/option/sections/option/tasks",
        description: "Display all tasks",
        iconPath: "src/actions/workspaces/option/projects/option/sections/option/tasks/task_icons/tasks.png",
        defaultAction: "open_task"
    }
]

module.exports = {
    entry: entryPaths.reduce((result, entryPath) => {
        result[entryPath] = "./src/actions/" + entryPath + ".ts"
        return result;
    }, {}),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        globalObject: 'this',
        libraryTarget: 'umd',
        library: 'main',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { "presets": ["@babel/preset-env"] }
            }
        ]
    },
    plugins: [
        new WBMetaJsonGenerator({
            environment,
            package: "Asana",
            packageDescription: "asana.com",
            packageIcon: "/src/logo.png",
            readmeFile: "README.md",
            sites: ["https://www.asana.com"],
            folderDescriptionList
        })
    ],
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              output: {
                comments: /(@description|@name|@ignore)/i,
              },
            }
          }),
        ],
    }
}
