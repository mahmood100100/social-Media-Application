import styles from '../../pages/Auth/Auth.module.css';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { registrationSchema } from '../../pages/Auth/Validation';
import { Bounce, toast } from 'react-toastify';

interface FormValues {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  confirmpass: string;
  profilePicture: File | null;
}

function SignUp() {
  const initialValues: FormValues = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    confirmpass: '',
    profilePicture: null,
  };

  const onSubmit = (values: FormValues) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value instanceof File || value == null) {
        formData.append(key, value, value.name);
      } else {
        formData.append(key, value);
      }
    });

    toast.success('your accout created successfully', {
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

  };

  const formik = useFormik<FormValues>({
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

  return (
    <div className={styles['right-section']}>
      <form className={styles.authForm} onSubmit={formik.handleSubmit}>
        <h3>Sign up</h3>
        <div className={styles['input-box']}>
          <div className={styles['form-input']}>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className={styles.authInput}
              name="firstname"
              id="firstname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstname}
            />
            {formik.touched.firstname && formik.errors.firstname && (
              <p className={styles['error-message']}>{formik.errors.firstname}</p>
            )}
          </div>
          <div className={styles['form-input']}>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className={styles.authInput}
              name="lastname"
              id="lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <p className={styles['error-message']}>{formik.errors.lastname}</p>
            )}
          </div>
          <div className={styles['form-input']}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className={styles.authInput}
              name="username"
              id="username"
              placeholder="Username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username && (
              <p className={styles['error-message']}>{formik.errors.username}</p>
            )}
          </div>
          <div className={styles['form-input']}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={styles.authInput}
              name="password"
              id="password"
              placeholder="Password"
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
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmpass}
            />
            {formik.touched.confirmpass && formik.errors.confirmpass && (
              <p className={styles['error-message']}>{formik.errors.confirmpass}</p>
            )}
          </div>
          <div className={`${styles['file-input']} ${styles['form-input']}`}>
            <label htmlFor="profilePicture">Profile picture</label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              onBlur={formik.handleBlur}
              onChange={(event) =>
                formik.setFieldValue(
                  'profilePicture',
                  event.currentTarget.files ? event.currentTarget.files[0] : null
                )
              }
              accept="image/*"
            />
            {formik.touched.profilePicture && formik.errors.profilePicture && (
              <p className={styles['error-message']}>{formik.errors.profilePicture}</p>
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
