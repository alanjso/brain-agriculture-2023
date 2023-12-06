const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');
// const routes = require('../routes/*js');

const options = {
    swaggerDefinition: {
        info: {
            title: 'Teste Brain Agriculture',
            version: '1.0.0',
            description: 'Documentação do teste brain agriculture',
        },
    },
    apis: ['../routes/*js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
