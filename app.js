const express = require('express');

const port = 8080;
const app = express();

app.use('',require('./routes/index'));

module.exports = app.listen(port,() => {
    console.log(`App is listening at http://localhost:${port}`);
})