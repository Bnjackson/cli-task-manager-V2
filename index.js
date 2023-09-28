'use stict';

const inputModule = require('./utils/inputs.js');

console.log(`
This program is a CLI based task manager, that allows you to view, add, update, or delete tasks all from the command line.
To get started enter one of the following commands:
view - view all of your tasks
add - add a new task
update - update an already existing task
delete - delete all or a specific task`);

async function main() {
    const anotherTask = true;
    // The anotherTask variable will remain true while user wishes to add more tasks, when false program ends. Variable is changed by the addAnotherTask function.
    while (anotherTask) {
        const userCommand = getUserCommand();
        console.log(userCommand);
    }
}

function getUserCommand() {
    const allowedInputs = ['view', 'add', 'update', 'delete'];
    const message = 'Enter a command: ';
    return inputModule.getUserCommand(message, allowedInputs);
}

main();