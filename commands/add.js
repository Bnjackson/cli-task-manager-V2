const axios = require('axios');

const inputModule = require('../utils/inputs.js');

const apiUrl = 'http://localhost:3000';

async function addTask() {
    // const newTask = inputModule.getNewTask();
    const newTask = 'task';
    try {
        await axios.post(`${apiUrl}/tasks/add-task`, {task : newTask});
        console.log('New Task added successfully');
    } catch (error) {
        console.error('Error calling post API endpoint to add new task', error);
    } 
}

module.exports = {
    addTask
}