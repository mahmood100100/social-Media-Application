import React, { useRef, useState, ChangeEvent } from 'react';
import styles from './SharePost.module.css';
import ProfileImage from '../../assets/Images/profileImg.jpg';
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

interface ImageState {
  image: string;
}

const SharePost: React.FC = () => {
  const [image, setImage] = useState<ImageState | null>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className= {styles.PostShare}>
      <img className= {styles.PostShareImg} src={ProfileImage} alt="" />
      <div className= {styles.PostShareDiv}>
        <input className= {styles.PostShareInput} type="text" placeholder="What's happening" />
        <div className= {styles.postOptions}>
          <div
            className= {styles.option}
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current?.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className= {styles.option} style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className= {styles.option} style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className= {styles.option} style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button className= {`button ${styles.psButton}`}>Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className= {styles.previewImage}>
            <UilTimes onClick={() => setImage(null)} />
            <img className= {styles.previewImageImg} src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SharePost;
