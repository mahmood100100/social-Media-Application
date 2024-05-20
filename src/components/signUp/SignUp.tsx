import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div className="file-input">
          <label htmlFor="profilePicture" className="custom-file-upload">
            Choose your profile picture
          </label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
          />
        </div>

        <div>
          <span style={{ fontSize: '15px' }}>Already have an account.</span>
          <Link to={"/auth"} className="sign-link">Sign In</Link>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignUp;
