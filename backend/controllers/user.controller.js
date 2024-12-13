import UserModel from '../models/user.model.js'


export const signupUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(422).json({ message: "All fields are required" })
        }

        // check if the user is already there
        const existingUser = await UserModel.findOne({ email })
        if (existingUser) {
            return res.status(200).json({ message: "User already exists with this email" })
        }

        const hashPassword = await UserModel.hashPassword(password)
        const newUser = await UserModel.create({ name, email, password: hashPassword })
        newUser.password = undefined
        res.status(201).json({
            message: "SignUp successfully",
            newUser: newUser
        })
    } catch (error) {
        return next(error);
        // res.json({error: error.message})
    }
}


export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body

        // check if the user is registered or not
        const user = await UserModel.findOne({ email }).select("+password")
        if (!user) {
            return res.status(401).json({ message: "User not found signup first" })
        }

        // if user is there then checking the password 
        const isMatch = await user.comparePassword(password)
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" })
        }

        const token = await user.generateAuthToken()
        user.password = undefined
        res.status(200).json({
            message: "Login successful",
            token,
            user,
        });
    } catch (error) {
        console.error("Login error:", error);
        return next(error);
    }
};


export const getUserProfile = async (req, res, next) => {
    try {
        console.log(req.user);
        res.status(200).json({
            message: "Profile fetched successfully",
        profile :req.user
            
        });
    } catch (error) {
        console.error("Login error:", error);
        return next(error);
    }
};


export const getAllUsers = async (req, res, next) => {
    try {
        const users = await UserModel.find()
        if (!users) {
            return res.status(200).json({ message: "User not found" })
        }
        res.status(200).json({
            message: "Users fetched successfully",
            countOfUsers: users.length,
            users: users
        })
    } catch (error) {
        return next(error);
        // res.json({error: error.message})
    }
}


export const updateUser = async (req, res, next) => {
    try {
        // const userId = req.params.userId
        const userId = req.user._id
        const { name, email } = req.body

        const updateUser = await UserModel.findByIdAndUpdate(userId, { name, email }, { new: true })
        if (!updateUser) {
            return res.status(200).json({ message: "User not found" })
        }
        res.status(200).json({
            message: "User updated successfully",
            updateUser: updateUser
        })
    } catch (error) {
        return next(error);
        // res.json({error: error.message})
    }
}


export const deleteUser = async (req, res, next) => {
    try {
        const userId = req.user._id

        await UserModel.findByIdAndDelete(userId)
        res.status(200).json({
            message: "User deleted successfully",
        })
    } catch (error) {
        return next(error);
        // res.json({error: error.message})
    }
}


export const logoutUser = async (req, res, next) => {
    try {
        res.clearCookie('token');
        res.status(200).json({
            message: "User logout successfully",
        })
    } catch (error) {
        return next(error);
        // res.json({error: error.message})
    }
}


