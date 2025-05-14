// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const classList = require("./classList.js");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('react-native-tailwind.helloWorld', function () {
	// 	// The code you place here will be executed every time your command is executed

	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from react-native-tailwind!');
	// });

	
	// const simpleCompletion = new vscode.CompletionItem('Hello World!');
	// const snippetCompletion = new vscode.CompletionItem('Good part of the day');
	let list = [];
	for (const key in classList) {
		const snippetCompletion = new vscode.CompletionItem(key);
		snippetCompletion.insertText = new vscode.SnippetString(key);
		const docs = new vscode.MarkdownString(classList[key]);
		snippetCompletion.documentation = docs;
		list.push(snippetCompletion);
	}
	// new vscode.CompletionItem('ham', vscode.CompletionItemKind.Class),

	const provider2 = vscode.languages.registerCompletionItemProvider(["javascript","html"],{
		provideCompletionItems(document, position) {

			// get all text until the `position` and check if it reads `console.`
			// and if so then complete if `log`, `warn`, and `error`
			// const linePrefix = document.lineAt(position).text.substr(0, position.character);
			// console.log(linePrefix)
			// document.te
			// if (linePrefix.startsWith('tw`')) {
			// 	console.log("aaaaaa")
			// 	return list;
			// }
			if(document.getText().search("react") != -1){
				return list;
			}
			
			// console.log(linePrefix)

			
			
		}
	})
	// context.subscriptions.push(disposable);
	context.subscriptions.push(provider2);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
