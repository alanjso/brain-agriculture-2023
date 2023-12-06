const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');
const server = express();
const config = require('config');
const authMiddleware = require('./app/middlewares/auth');
require('./utils/schedule');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerOptions');

if (config.get('postgres').habilitado) {
    require('./database/pgsql');
}

// TODO add authMiddleware
// server.use(authMiddleware);
server.use(express.json());
server.use(cors());
server.use('/v1', routes);
server.use('/v1/swagger/brain-agrticulture', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = server;