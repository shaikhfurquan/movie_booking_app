import express from 'express';
import {getAllUsers, updateUser, deleteUser, loginUser, signupUser } from '../controllers/user.controller.js';
const userRouter = express.Router();

userRouter.post('/signup', signupUser)
userRouter.post('/login', loginUser)
userRouter.get('/users', getAllUsers)
userRouter.put('/update/:userId', updateUser)
userRouter.delete('/delete/:userId', deleteUser)


export default userRouter