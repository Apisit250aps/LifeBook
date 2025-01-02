import { Document, model, ObjectId, Schema } from "mongoose"

export interface IUser extends Document {
  _id: ObjectId
  email: string
  name: string
  image: string
  emailVerified: boolean
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    emailVerified: { type: Boolean, required: true }
  },
  { timestamps: true }
)

const User = model<IUser>("users", userSchema)
export default User