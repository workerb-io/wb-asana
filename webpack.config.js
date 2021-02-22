
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs');
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
        iconPath: "src/actions/workspaces/workspace_icons/workspace.png"
    },
    {
        path: "/workspaces/option/teams",
        description: "Display all the teams",
        iconPath: "src/actions/workspaces/option/teams/team_icons/teams.png"
    },
    {
        path: "/workspaces/option/projects",
        description: "Display all workspace projects",
        iconPath: "src/actions/workspaces/option/projects/project_icons/project.png"
    },
    {
        path: "/workspaces/option/teams/option/projects",
        description: "Display all team projects",
        iconPath: "src/actions/workspaces/option/teams/option/projects/project_icons/project.png"
    },
    {
        path: "/workspaces/option/teams/option/users",
        description: "Display all users of the team",
        iconPath: "src/actions/workspaces/option/teams/option/users/user_icons/users.png"
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
            packageDescription: "workerB package for asana.com",
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