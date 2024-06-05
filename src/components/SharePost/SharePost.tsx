import React, { useRef, useState, ChangeEvent } from 'react';
import ProfileImage from '../../assets/Images/profileImg.jpg';
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { CreatePost } from '../../DataTypes/PostType';
import styles from './SharePost.module.css';
import { useFormik } from 'formik';
import { sharePostSchema } from '../../pages/UserHomePage/Validation';
import { addPost } from '../../Api/PostsApi';
import { Bounce, toast } from 'react-toastify';
interface ImageState {
  imageFile: File,
  imageUrl: string
}

const SharePost: React.FC = () => {
  const [image, setImage] = useState<ImageState | null>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const initialValues: CreatePost = {
    title: '',
    body: '',
    image: undefined
  };

  const onSubmit = async (values: CreatePost) => {
    values.image = image?.imageFile;
    try {
      await addPost(values);
      setImage(null);
      formik.resetForm();
      toast.success('Post added successfully', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error: any) {
      toast.error(`Error adding post :  ${error.message}`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const formik = useFormik<CreatePost>({
    initialValues,
    validationSchema: sharePostSchema,
    onSubmit,
  });

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        imageFile: img,
        imageUrl: URL.createObjectURL(img),
      });
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (imageRef.current) {
      imageRef.current.value = '';
    }
  };

  return (
    <div className={styles.PostShare}>
      <img className={styles.PostShareImg} src={ProfileImage} alt="" />
      <div className={styles.PostShareDiv}>
        <div className={styles.postContent}>
          <input
            name='title'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title || ''}
            className={styles.PostShareInput}
            type="text"
            placeholder="Post Title"
          />
          {formik.touched.title && formik.errors.title && (
            <div className={styles.error}>{formik.errors.title}</div>
          )}
          <input
            name='body'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.body}
            className={styles.PostShareInput}
            type="text"
            placeholder="What's happening"
          />
          {formik.touched.body && formik.errors.body && (
            <div className={styles.error}>{formik.errors.body}</div>
          )}
        </div>
        <div className={styles.postOptions}>
          <div
            className={styles.option}
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current?.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className={styles.option} style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className={styles.option} style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className={styles.option} style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button
            onClick={() => formik.handleSubmit()}
            className={`button ${styles.psButton}`}
            type="button"
          >
            Share
          </button>
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
          <div className={styles.previewImage}>
            <UilTimes onClick={handleRemoveImage} />
            <img className={styles.previewImageImg} src={image.imageUrl} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SharePost;
