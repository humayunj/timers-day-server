import mongoose, { Schema, Document } from "mongoose";

export interface ITimer extends Document {
  name: String;
  createdAt: Date;
  updatedAt: Date;
}
const TimerSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ITimer>("Timer", TimerSchema);
