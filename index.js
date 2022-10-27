import express from 'express'
import routes from './src/modules/Routes.js'
import { errors } from 'celebrate';
import AppError from './src/config/appError.js';
import config from './src/config/environment.js';
const app = express();
const PORT = config.port || 3000;

app.use(routes)

app.use(errors());
app.use(
    (error, request, response, next) => {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({
          status: 'error',
          message: error.message,
        });
      }
  
      return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    },
  );

app.listen(PORT,()=>{
    console.log('Listening on port %s', PORT)
});