import { Types } from "mongoose";

export interface IRequest extends Request {
  title?: { _id?: Types.ObjectId };
}
