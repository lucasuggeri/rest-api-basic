import express from 'express'
import routes from './src/modules/Routes.js'
const app = express();
const PORT  = 3000;

app.use(routes)

app.listen(PORT,()=>{
    console.log('Listening on port %s', PORT)
});