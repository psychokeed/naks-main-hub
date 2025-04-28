import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;  // Added isAdmin field
  resetToken?: string;  // Optional reset token field for password reset flow
}

const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },  // Default value for isAdmin
  resetToken: { type: String, default: null },  // Default value is null
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
