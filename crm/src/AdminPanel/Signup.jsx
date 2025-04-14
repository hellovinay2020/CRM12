import React from "react";
import './SignupLogin.css';

function Signup() {
    return (
        <div className="signup-container">
            <div className="signup-left">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    alt="Signup Visual"
                    className="signup-image"
                />
            </div>
            <div className="signup-right">
                <form className="signup-form">
                    <h2>Sign up</h2>

                    <div className="input-wrapper">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Your Full Name" required />
                    </div>

                    <div className="input-wrapper">
                        <i className="fas fa-envelope"></i>
                        <input type="email" placeholder="Your Email Address" required />
                    </div>

                    <div className="input-wrapper">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required />
                    </div>

                    <div className="input-wrapper">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Confirm Password" required />
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" required />
                        I agree all statements in Terms of service
                    </div>

                    <button type="submit">Register</button>
                    <p>Already have an account? <a href="#">Login</a></p>
                </form>


            </div>
        </div>
    )
}
export default Signup;