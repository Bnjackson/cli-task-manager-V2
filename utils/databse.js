const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('tasks.db');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT)');
});

db.close((error) => {
    if(error) {
        return console.error(err.message);
    }
    console.log('Database closed.');
});

module.exports = {

};