import React from 'react';
import classes from './Login.module.css';



const Login = (props) => (
    <div className="wrapper">
        <div className={classes.loginContainer}>
            <h1>Log in</h1>
            <div className={classes.login}>
                <form action="" noValidate>
                    <div className={classes.inputGroup}>
                        <label id="emailLabel">Email Address</label>
                        <input type="email"
                            name="email"
                            placeholder="name@gmail.com" required
                        />
                        <div className={classes.error} id="emailError" />
                    </div>
                    <div className={classes.inputGroup}>
                        <label id="passwordLabel">Password</label>
                        <input type="password"
                            name="password"
                            placeholder="Password"
                            required pattern=".{5,}" />
                        <div className={classes.error} id="passwordError" />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-block" type="submit">Log In</button>
                    </div>
                </form>
                <p>Forgot password?</p>
                <p>Don’t have an account?
                <a href="/signup">Sign up</a>
                </p>
            </div>

        </div>
    </div>
)

export default Login;

