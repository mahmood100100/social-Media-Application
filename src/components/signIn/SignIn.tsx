import { Link } from 'react-router-dom'
import styles from '../../pages/Auth/Auth.module.css'
import './SignIn.css'
import { logInSchema } from '../../pages/Auth/Validation'
import {useFormik} from 'formik'
import { Bounce, toast } from 'react-toastify'

interface FormValues {
  username: string;
  password: string;
}

function SignIn() {

  const initialValues: FormValues = {
    username: '',
    password: '',
  };

  const onSubmit = (values: FormValues) => {
    console.log(values)
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
    validationSchema: logInSchema,
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
      <form onSubmit={formik.handleSubmit} className={styles.authForm}>
        <h3>Log In</h3>

        <div className={styles['input-box']}>
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
        </div>

        <div className = {styles['to-sign-in-or-up']}>
          <span style={{ fontSize: '15px', marginRight : '10px' }}>
            Don't have an account Sign up
          </span>
          <Link to={"signUp"} className={styles['sign-link']}>Sign Up</Link>
        </div>

        <button onClick={checkValidity} className={`${styles.authButton} button`} type="submit">SignIn</button>

      </form>
    </div>

  )
}
export default SignIn;