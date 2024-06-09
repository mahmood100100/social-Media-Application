import { Comment } from "./CommentsType";
export interface PostAuthor {
  id: number;
  profile_image: string
  is_fake: number;
  username: string;
  name: string;
  email: string | null;
  email_verified_at: string | null;
  remember_token: string | null;
  created_at: string;
  updated_at: string;
}

export interface GetPost {
  id: number;
  title: string | null;
  body: string;
  author: PostAuthor;
  image: string ;
  tags: string[];
  created_at: string;
  comments_count: number;
}

export interface CreatePost {
  title: string | undefined;
  body: string;
  image: File | undefined;
}

export interface PostWithComments {
  id: number;
  title: string | null;
  body: string;
  author: PostAuthor;
  image: string ;
  tags: string[];
  created_at: string;
  comments_count: number;
  comments : Comment[];
}

