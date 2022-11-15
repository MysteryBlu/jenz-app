import { PostComment } from "./post-comment.model";
import { User } from "./user.model";

export interface Post {
  user: User;
  message: string;
  date: Date;
  comments: PostComment[];
}