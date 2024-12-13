import express from 'express';
import { getAllUsers, updateUser, deleteUser, loginUser, signUpUser, logoutUser, getUserProfile } from '../controllers/user.controller.js';
import { isAuthUser } from '../middlewares/isAuth.middleware.js';
const userRouter = express.Router();

userRouter.post('/signup', signUpUser)
userRouter.post('/login', loginUser)
userRouter.get('/users', getAllUsers)
userRouter.get('/profile', isAuthUser, getUserProfile)
userRouter.put('/update', isAuthUser, updateUser)
userRouter.delete('/delete', isAuthUser, deleteUser)
userRouter.get('/logout', isAuthUser, logoutUser)


export default userRouter