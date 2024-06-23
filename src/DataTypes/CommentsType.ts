import { PostAuthor as CommentAuthor } from "./PostType";

export interface Comment {
  id: number;
  body: string;
  author: CommentAuthor;
}