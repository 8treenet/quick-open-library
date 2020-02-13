const vscode = require('vscode');
const exec = require('child_process').exec;
module.exports = function(context) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.demo.getCurrentFilePath', (uri) => {
        var dir = uri.path.slice(0, uri.path.lastIndexOf('/'));
        exec(`code `+ dir)
    }));
};