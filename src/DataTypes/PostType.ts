export interface PostAuthorType {
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

export interface PostType {
  id: number;
  title: string | null;
  body: string;
  author: PostAuthorType;
  image: string ;
  tags: string[];
  created_at: string;
  comments_count: number;
}
