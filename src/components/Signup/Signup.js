import { Link } from 'react-router-dom';
import classes from './Signup.module.css';


const SignUp = props => {
    return (
        <div className="wrapper">
            <div className={classes.signupContainer}>
                <h1>Sign Up</h1>
                <div className={classes.signup}>
                    <form action="" noValidate>
                        <div className={classes.inputGroup}>
                            <label id="nameLabel">Full Name</label><span>*</span>
                            <input type="name" name="name"
                                placeholder="Enter Full Name"
                            />
                            <div className={classes.error} id="nameError" />
                        </div>
                        <div className={classes.inputGroup}>
                            <label id="emailLabel">Email Address</label><span>*</span>
                            <input type="email" name="email"
                                placeholder="name@gmail.com" noValidate
                            />
                            <div className={classes.error} id="emailError" />
                        </div>
                        <div className={classes.inputGroup}>
                            <label id="passwordLabel">Password</label><span>*</span>
                            <input type="password" name="password"
                                placeholder="Password"
                            />
                            <div className={classes.error} id="passwordError" />
                        </div>
                        <div className={classes.inputGroup}>
                            <label id="confirmPasswordLabel">Confirm Password</label><span>*</span>
                            <input type="password" name="confirmPassword"
                                placeholder="Confirm Password"
                            />
                            <div className={classes.error} id="confirmPasswordError" />
                        </div>
                        <div>
                            <button className="btn btn-block btn-primary" type="submit" value="Sign up"> Sign Up</button>

                        </div>
                    </form>
                    <p>Click here to
                        <Link to="/login">Login</Link>
                    </p>

                </div>
            </div>
        </div>
    );
}

export default SignUp;