const axios = require('axios');

const apiUrl = 'http://localhost:3000';

async function listTasks() {
    try {
        const response = await axios.get(`${apiUrl}/tasks/list`);
        console.log(response.data); 
    } catch (error) {
        console.error(`Error calling get API endpoint to get list of tasks`, error);
    }
}

module.exports = {
    listTasks
}