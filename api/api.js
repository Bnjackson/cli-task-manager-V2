const express = require('express');
const router = express.Router();

// Middleware for parsing JSON requests 
router.use(express.json());

router.get('/tasks/list', (req, res) => {
    try {
        const response = [{message : 'Hello World!'}];
        res.json(response);
    } catch (error) {
        console.log('Error getting list of tasks from database.', error);
    }
})

module.exports = router;