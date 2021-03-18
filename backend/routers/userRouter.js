import express from 'express';
import asyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get('/seed',
    asyncHandler(async (req, res) => {
        await User.deleteMany();
        const createdUsers = await User.insertMany(data.users);

        res.send({ createdUsers });
    }));

export default userRouter;