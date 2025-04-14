import React from "react";
import './Login.css';

function Login() {
    return (
        
        <div className="login-container">
            <div className="login-left">
                <img src="/images/Login.svg" />
            </div>
            <div className="login-right">
                <form className="login-form">
                    <h2>Login</h2>

                    <div className="input-wrapper">
                        <i className="fas fa-envelope"></i>
                        <input type="email" placeholder="Email Address" required />
                    </div>

                    <div className="input-wrapper">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required />
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" required />
                        Remember me
                    </div>

                    <button type="submit">Login</button>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login;
