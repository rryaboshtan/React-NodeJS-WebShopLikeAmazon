import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get('/seed',
    asyncHandler(async (req, res) => {
        // await User.deleteMany();
        const createdUsers = await User.find({});

        res.send({ createdUsers });
    }));

userRouter.post('/signin',
    asyncHandler(async (req, res) => {
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

        res.status(401).send({ message: 'Invalid email or password' });
    }));

userRouter.post('/register',
    asyncHandler((req, res) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
        })

        const createdUser = user.save(function (err, doc) {
            if (err) return console.error(err);
            console.log(doc);
            res.send({
                _id: doc._id,
                name: doc.name,
                email: doc.email,
                isAdmin: doc.isAdmin,
                token: generateToken(doc),
            })
        });
        console.log("CREATED USER:", createdUser);
    }));


export default userRouter;