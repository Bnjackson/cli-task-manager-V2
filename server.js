const express = require('express');
const apiRouter = require('./api/api.js');

const app = express();
app.use('/', apiRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;