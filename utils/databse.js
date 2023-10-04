const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('tasks.db');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT)');
});


async function getTasks(callback) {
    db.all('SELECT * FROM tasks', [], (error, rows) => {
        if (error) {
            console.error(error.message);
            callback(error, null);
        } else {
            callback(null, rows);
        }
    });
}

async function insertTask(newTask, callback) {
    db.run('INSERT INTO tasks (task) VALUES (?)', [newTask], function (error) {
        if (error) {
            console.error(error.message);
            callback(error, null);
        } else {
            callback(null, newTask);
        }
    });
}

async function updateTask() {

}

async function deleteTask() {

}

db.close((error) => {
    if(error) {
        return console.error(err.message);
    }
    console.log('Database closed.');
});

module.exports = {
    getTasks,
    insertTask,
    updateTask,
    deleteTask
};