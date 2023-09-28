const readlineSync = require('readline-sync');

function getUserCommand(message, allowedInputs) {
    const userInput = readlineSync.question(`${message}`).toLowerCase();
    return checkUserCommand(userInput) ? userInput : getUserCommand(message, allowedInputs);
    function checkUserCommand(userInput) {
        if (allowedInputs.includes(userInput)) {
            return true;
        } else {
            console.log(`Input must match one of the following commands ${allowedInputs}`);
            return false;
        }
    }
}

module.exports = {
    getUserCommand
}