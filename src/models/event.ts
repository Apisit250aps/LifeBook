import { Document, model, ObjectId, Schema } from "mongoose"

export interface IEvent extends Document {
  _id: ObjectId
  userId: ObjectId
  title: string
  description: string
  date: Date
}

const eventSchema = new Schema<IEvent>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true }
  },
  { timestamps: true }
)

const Event = model<IEvent>("events", eventSchema)
export default Event