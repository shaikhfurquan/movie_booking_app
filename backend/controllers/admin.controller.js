import AdminModel from '../models/admin.model.js'


export const signUpAdmin = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(422).json({ message: "All fields are required" })
        }

        // check if the Admin is already there
        const existingAdmin = await AdminModel.findOne({ email })
        if (existingAdmin) {
            return res.status(200).json({ message: "Admin already exists with this email" })
        }

        const hashPassword = await AdminModel.hashPassword(password)
        const newAdmin = await AdminModel.create({ name, email, password: hashPassword })
        newAdmin.password = undefined
        res.status(201).json({
            message: "SignUp successfully",
            newAdmin: newAdmin
        })
    } catch (error) {
        return next(error);
        // res.json({error: error.message})
    }
}


export const loginAdmin = async (req, res, next) => {
    try {
        const { email, password } = req.body

        // check if the Admin is registered or not
        const admin = await AdminModel.findOne({ email }).select("+password")
        if (!admin) {
            return res.status(401).json({ message: "Admin not found signup first" })
        }

        // if Admin is there then checking the password 
        const isMatch = await admin.comparePassword(password)
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" })
        }

        const token = await admin.generateAuthToken()
        admin.password = undefined
        res.cookie("token", token)
        res.status(200).json({
            message: `Welcome ${admin.name}`,
            token,
            admin,
        });
    } catch (error) {
        console.error("Login error:", error);
        return next(error);
    }
};


export const getAdminProfile = async (req, res, next) => {
    try {
        res.status(200).json({
            message: "Profile fetched successfully",
        profile :req.admin
            
        });
    } catch (error) {
        return next(error);
    }
};

export const getAllAdmins = async (req, res, next) => {
    try {
        const admins = await AdminModel.find()
        if (!admins) {
            return res.status(200).json({ message: "Admin not found" })
        }
        res.status(200).json({
            message: "Admins fetched successfully",
            coutOfAdmins : admins.length,
            admins
        })
    } catch (error) {
        return next(error);
        // res.json({error: error.message})
    }
}


export const getadminById = async (req, res, next) => {
    try {
        const admin = await AdminModel.findById(req.params.adminId)
        if (!admin) {
            return res.status(200).json({ message: "Admin not found" })
        }
        res.status(200).json({
            message: "Admin fetched successfully",
            admin
        })
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({ message: "Invalid admin ID............", error: error.message });
        }
        return next(error);
        // res.json({error: error.message})
    }
}


export const updateAdmin = async (req, res, next) => {
    try {
        const { name, email } = req.body

        const updateAdmin = await AdminModel.findByIdAndUpdate(req.admin._id, { name, email }, { new: true })
        if (!updateAdmin) {
            return res.status(200).json({ message: "Admin not found" })
        }
        res.status(200).json({
            message: "Admin updated successfully",
            updateAdmin: updateAdmin
        })
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({ message: "Invalid Admin ID", error: error.message });
        }
        return next(error);
        // res.json({error: error.message})
    }
}


export const deleteAdmin = async (req, res, next) => {
    try {
        await AdminModel.findByIdAndDelete(req.admin._id)
        res.status(200).json({
            message: "Admin deleted successfully",
        })
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({ message: "Invalid Admin ID", error: error.message });
        }
        return next(error);
        // res.json({error: error.message})
    }
}

export const logoutAdmin = async (req, res, next) => {
    try {
        res.clearCookie('token');
        res.status(200).json({
            message: "Admin logout successfully",
        })
    } catch (error) {
        return next(error);
        // res.json({error: error.message})
    }
}