import img1 from '../assets/Images/img1.png';
import img2 from '../assets/Images/img2.png';
import img3 from '../assets/Images/img3.png';
import img4 from '../assets/Images/img4.jpg';

interface Follower {
  name: string;
  username: string;
  img: string;
}

export const Followers: Follower[] = [
  { name: "Andrew Thomas", username: "AndrewThomas", img: img1 },
  { name: "Hulk Buster", username: "HulkBuster", img: img2 },
  { name: "Thor", username: "ThunderMaster", img: img3 },
  { name: "Natasha", username: "Natasha", img: img4 },
];
