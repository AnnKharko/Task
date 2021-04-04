const express = require('express');
const mongoose = require('mongoose');

const apiRouter = require('./router/api.router');
const { PORT } = require('./configs/config');

const app = express();

// eslint-disable-next-line no-use-before-define
_connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            code: err.customCode || 0,
            message: err.message || ''
        });
});

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});

function _connectDB() {
    mongoose.connect('mongodb://localhost:27017/task-db');

    const { connection } = mongoose;

    connection.on('error', (error) => {
        console.log(error);
    });
}
