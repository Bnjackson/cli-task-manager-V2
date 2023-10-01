'use stict';

const inputModule = require('./utils/inputs.js');
const listModule = require('./commands/list.js');
const addModule = require('./commands/add.js');
const updateModule = require('./commands/update.js');
const deleteModule = require('./commands/delete.js');
const database = require('./utils/databse.js');

console.log(`
This program is a CLI based task manager, that allows you to list, add, update, or delete tasks all from the command line.
To get started enter one of the following commands:
list - list all of your tasks
add - add a new task
update - update an already existing task
delete - delete all or a specific task`);

async function main() {
    let anotherTask = true;
    // The anotherTask variable will remain true while user wishes to add more tasks, when false program ends. Variable is changed by the addAnotherTask function.
    while (anotherTask) {
        const userCommand = getUserCommand();
        await callCommand(userCommand);
        getAnotherTask() ? anotherTask = true : anotherTask = false;
    }
    console.log('Thank you for using this program');
}

function getUserCommand() {
    const allowedInputs = ['list', 'add', 'update', 'delete'];
    const message = 'Enter a command: ';
    return inputModule.getUserCommand(message, allowedInputs);
}

async function callCommand(command) {
    if (command === 'list') {
        await listModule.listTasks();
    } else if (command === 'add') {
        await addModule.addTask();
    } else if (command === 'update') {
        await updateModule.updateTask();
    } else if (command === 'delete') {
        await deleteModule.deleteTask();
    }   
}

function getAnotherTask() {
    const message = 'Would you like to enter another task? yes/no ';
    const allowedInputs = ['yes', 'y', 'no', 'n'];
    const userChoice = inputModule.getUserCommand(message, allowedInputs);
    if (userChoice === 'yes' || userChoice === 'y') {
        return true;
    } else if (userChoice === 'no' || userChoice === 'n') {
        return false;
    }
}

main();