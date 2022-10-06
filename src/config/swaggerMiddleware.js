import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
const options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Rest API Documentation',
            version: '1.0.0',
        },
    },
    apis: ['./src/modules/**/*.js'],
};

const openapiSpecification = swaggerJsdoc(options);
const swaggerSpec = openapiSpecification
export default {
    serve: swaggerUi.serve, 
    setup: swaggerUi.setup(swaggerSpec)
}