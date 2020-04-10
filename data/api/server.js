const express = require('express');
const cors = require("cors");
const helmet = require('helmet');

const projectsRouter = require('./projectsRouter');
const actionsRouter = require('./actionsRouter');

const server = express();


server.use(helmet());
server.use(express.json());
server.use(cors());


//endpoints
server.get('/', (req, res) => {
    res.send(`
    <h2> TESTING </h2>`);
});

server.use('/api/projects', projectsRouter);
server.use("/api/actions", actionsRouter);

module.exports = server;