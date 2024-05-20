import React from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'

function SignIn() {
  return (
    <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div style={{marginInline : "50px" }}>
              <span style={{ fontSize: "15px"}}>
                Don't have an account Sign up
              </span>
            <Link to={"signUp"} className="sign-link">Sign Up</Link>
          </div>

          <button className="button infoButton" type="submit">SignIn</button>

        </form>
      </div>

  )
}
export default SignIn;