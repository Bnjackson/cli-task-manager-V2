const express = require('express');
const router = express.Router();
const database  = require('../utils/databse.js');

// Middleware for parsing JSON requests 
router.use(express.json());

router.get('/tasks/list', async (req, res) => {
    try {
        const response = await database.getTasks((error, tasks) => {
            if (error) {
                console.error('Error getting list of tasks from database.', error);
            } else {
                res.json(tasks);
            }
        });
    } catch (error) {

        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.post('/tasks/add-task', async (req, res) => {
    try {
        const newTask = req.body.task;
        console.log(newTask);
        await database.insertTask(newTask, (error, task) => {
            if (error) {
                console.error('Error adding new task to database.', error);
            } else {
                res.status(200).json({message: 'Task added successfully' });
            }
        });
    } catch (error) {
        res.status(500).json({error: `Internal server error ${task}`,});
    }
});

module.exports = router;