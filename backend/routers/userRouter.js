import express, { request } from 'express';
import asyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get('/seed',
    asyncHandler(async (req, res) => {
        await User.deleteMany();
        const createdUsers = await User.insertMany(data.users);

        res.send({ createdUsers });
    }));

userRouter.post('/signin',
    asyncHandler(async (req, res) => {
        // await User.deleteMany();
        const user = await User.findOne({ email: req.body.email });

        if (user)
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user),
                })
                return;
            }

        res.status(401).send({ message: 'Invalid email or password'});
    }));

export default userRouter;