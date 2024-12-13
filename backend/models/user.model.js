import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email should be unique"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters"],
        select: false,
    }
}, { timestamps: true })

// userSchema.pre('save' , async function(next) {
//     if(!this.isModified("password")) return next();
//     this.password = await bcrypt.hash(this.password , 10)
// })

// Static method to hash password
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};


userSchema.methods.comparePassword = async function(plainPassword) {
    return await bcrypt.compare(plainPassword, this.password)
}

// Method to generate authentication token
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });
    return token;
};


const UserModel = mongoose.model('User', userSchema)

export default UserModel