import { User } from './user.model';

export interface Post extends PostComment {
  id: number;
}

export interface PostComment {
  user: User;
  message: string;
  comments: PostComment[];
}