import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }, // Default value for isAdmin
    resetToken: { type: String, default: null }, // Default value is null
});
const User = mongoose.model("User", UserSchema);
export default User;
