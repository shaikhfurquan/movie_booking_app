import express from 'express';
import { isAuthUser, isAuthAdmin } from '../middlewares/isAuth.middleware.js';
import { deleteAdmin, getadminById, getAdminProfile, getAllAdmins, loginAdmin, logoutAdmin, signUpAdmin, updateAdmin } from '../controllers/admin.controller.js';
const adminRouter = express.Router();

adminRouter.post('/signup', signUpAdmin)
adminRouter.post('/login', loginAdmin)
adminRouter.get('/profile', isAuthAdmin, getAdminProfile)
adminRouter.get('/admins', isAuthAdmin, getAllAdmins)
adminRouter.put('/update', isAuthAdmin, updateAdmin)
adminRouter.get('/logout', isAuthAdmin, logoutAdmin)
adminRouter.delete('/delete', isAuthAdmin, deleteAdmin)
adminRouter.get('/:adminId', isAuthAdmin, getadminById)


export default adminRouter