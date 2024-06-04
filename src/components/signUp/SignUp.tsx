import styles from '../../pages/Auth/Auth.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { registrationSchema } from '../../pages/Auth/Validation';
import { Bounce, toast } from 'react-toastify';
import { AddUser } from '../../Api/AuthApi';
import { useState } from 'react';
import {UserSignUpValues} from '../../DataTypes/UserType'

interface regisrtationErrorsObject {
  username: string[] | null;
  email: string[] | null;
}

function SignUp() {

  const [regisrtationErrors, setRegisrtionErrors] = useState<regisrtationErrorsObject | null>(null);
  const navigate = useNavigate();
  const initialValues: UserSignUpValues = {
    name: '',
    email: '',
    username: '',
    password: '',
    confirmpass: '',
    image: null,
  };

  const onSubmit = async (values: UserSignUpValues) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (key === 'image' && !value) {
        return;
      }
      
      if (value instanceof File) {
        formData.append(key, value, value.name);
      } else {
        formData.append(key, value);
      }
    });

    const response = await AddUser(formData);
    if (response.data) {
      toast.success(response.data, {
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
       navigate("/auth")

    } else if (response.errors) {

      setRegisrtionErrors(response.errors);

      if (response.errors.network) {
        toast.error('An error occurred. Please try again later.', {
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
    }
  };

  const formik = useFormik<UserSignUpValues>({
    initialValues,
    onSubmit,
    validationSchema: registrationSchema,
  });

  const checkValidity = () => {
    if (!formik.isValid) {
      toast.error('Fix the errors and try again', {
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
  }

  const handleErrorOverlay = (errorType: string) => {
    if (!regisrtationErrors) return;
    if (errorType === "email" && regisrtationErrors.email) {
      setRegisrtionErrors(prevErrors => ({ ...prevErrors!, email: null }));
    } else if (errorType === "username" && regisrtationErrors.username) {
      setRegisrtionErrors(prevErrors => ({ ...prevErrors!, username: null }));
    }
  };

  return (
    <div className={styles['right-section']}>
      <form className={styles.authForm} onSubmit={formik.handleSubmit}>
        <h3>Sign up</h3>
        <div className={styles['input-box']}>
          <div className={styles['form-input']}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className={styles.authInput}
              name="name"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <p className={styles['error-message']}>{formik.errors.name}</p>
            )}
          </div>
          <div className={styles['form-input']}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className={styles.authInput}
              name="email"
              id="email"
              onChange={(event) => {
                formik.handleChange(event)
                handleErrorOverlay('email')
              }}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className={styles['error-message']}>{formik.errors.email}</p>
            )}
            {regisrtationErrors && regisrtationErrors.email &&
              <p className={styles['error-message']}>{regisrtationErrors.email[0]}</p>}
          </div>
          <div className={styles['form-input']}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className={styles.authInput}
              name="username"
              id="username"
              placeholder="Enter your Username"
              onChange={(event) => {
                formik.handleChange(event)
                handleErrorOverlay('username')
              }}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username && (
              <p className={styles['error-message']}>{formik.errors.username}</p>
            )}
            {regisrtationErrors && regisrtationErrors.username &&
              <p className={styles['error-message']}>{regisrtationErrors.username[0]}</p>}
          </div>

          <div className={`${styles['file-input']} ${styles['form-input']}`}>
            <label htmlFor="image">Profile Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onBlur={formik.handleBlur}
              onChange={(event) =>
                formik.setFieldValue(
                  'image',
                  event.currentTarget.files ? event.currentTarget.files[0] : null
                )
              }
              accept="image/*"
            />
            {formik.touched.image && formik.errors.image && (
              <p className={styles['error-message']}>{formik.errors.image}</p>
            )}
          </div>
          
          <div className={styles['form-input']}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={styles.authInput}
              name="password"
              id="password"
              placeholder="Enter your Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <p className={styles['error-message']}>{formik.errors.password}</p>
            )}
          </div>
          <div className={styles['form-input']}>
            <label htmlFor="confirmpass">Confirm Password</label>
            <input
              type="password"
              className={styles.authInput}
              name="confirmpass"
              id="confirmpass"
              placeholder="Confirm your Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmpass}
            />
            {formik.touched.confirmpass && formik.errors.confirmpass && (
              <p className={styles['error-message']}>{formik.errors.confirmpass}</p>
            )}
          </div>
        </div>
        <div className={styles['to-sign-in-or-up']}>
          <span style={{ fontSize: '15px', marginRight: '10px' }}>Already have an account?</span>
          <Link to="/auth" className={styles['sign-link']}>Sign In</Link>
        </div>
        <button onClick={checkValidity} className={`button ${styles.authButton} `} type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignUp;
