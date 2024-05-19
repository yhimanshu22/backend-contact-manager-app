import asyncHandler from 'express-async-handler';
import jwt, { decode } from 'jsonwebtoken';

const validateToken = asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader = req.headers.authorization||req.headers.authorization ;
    if(authHeader && authHeader.startsWith('Bearer')){
        token = authHeader.split(' ')[1];
        jwt.verify(token,process.env.JWT_SECRET_TOKEN,(err,decoded)=>{
            if(err){
                res.status(401);
                throw new Error('User is not authorized');
            }
            req.user = decoded.user;
            next();
        });
        if(!token){
            res.status(401);
            throw new Error('User is not authorized or token is missing ')
        }

    }
})

export {validateToken};