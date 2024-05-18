import asyncHandler from 'express-async-handler';
import { User } from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = asyncHandler(async (req, res) => {
    const {username,email,password} = req.body;
    if(!username||!email||!password){
        res.status(400);
        throw new Error('All fields are mandatory')  
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error('User Already registered')
    }
    //Hash Password--------->
    const hashedPassword = await bcrypt.hash(password,10);
    const createdUser = await User.create({
        username,email,password:hashedPassword,
    });
   
    // console.log(`User Created :${createdUser}`);

    if(createdUser){
        res.status(201).json({_id:createdUser.id,email:createdUser.email})
    }else{
        res.status(400);
        throw new Error('User data is not valid')
    }

});

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error('All fields are mandatory');
    }

    const loginUser = await User.findOne({ email });

    if (loginUser && (await bcrypt.compare(password, loginUser.password))) {
        const accessToken = jwt.sign({
            user: {
                username: loginUser.username,
                email: loginUser.email,
                id: loginUser.id,
            }
        }, process.env.JWT_SECRET_TOKEN, { expiresIn: '15min' });

        return res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error('Email or password is not valid');
    }
});


export const currentUser =  asyncHandler(async (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ message: 'User created', data: { name, email } });
});

