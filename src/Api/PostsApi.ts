import postPic1 from '../assets/Images/postpic1.jpg';
import postPic2 from '../assets/Images/postpic2.jpg';
import postPic3 from '../assets/Images/postpic3.jpg';

import { PostType } from '../DataTypes/PostType';

export const PostsData: PostType[] = [
  {
    img: postPic1,
    name: 'Tzuyu',
    desc: "Happy New Year all friends! #2023",
    likes: 2300,
    liked: true,
  },
  {
    img: postPic2,
    name: 'Maryam',
    desc: "Party time :)",
    likes: 2300,
    liked: false,
  },
  {
    img: postPic3,
    name: "Salena Gomez",
    desc: "At Archery Festival",
    likes: 800,
    liked: false,
  },
];
