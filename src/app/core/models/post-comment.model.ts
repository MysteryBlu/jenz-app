import { User } from "./user.model";

export interface PostComment {
  user: User;
  message: string;
  date: Date;
}