import {Router} from 'express'

const route = Router();


route.get('/',(req,res)=>{
    console.log(req);
})

export default route;