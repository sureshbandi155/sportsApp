import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './Login.module.css';


class Login extends Component {
    state = {
        formControls: {
            email: {
                value: ''
            },
            password: {
                value: ''
            },
        }
    }
    changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        event.target.classList.add('active');
        this.showInputError(event.target);
        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        }, () => console.log(this.state));
    }

    submitHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.formControls) {
            formData[formElementIdentifier] = this.state.formControls[formElementIdentifier].value;
        }
        console.log(formData);

        if (!this.showFormErrors()) {
            console.log('Form is invalid: do not Login');
        } else {
            console.log('Form is valid: check serverside validation');
            this.props.history.push('/home');
        }
    }


    showFormErrors() {
        const inputs = document.querySelectorAll('input');
        let isFormValid = true;

        inputs.forEach(input => {
            input.classList.add('active');

            const isInputValid = this.showInputError(input);

            if (!isInputValid) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }
    showInputError(input) {
        const name = input.name;
        const validity = input.validity;
        const label = document.getElementById(`${name}Label`).textContent;
        const error = document.getElementById(`${name}Error`);
        const isPassword = name.indexOf('password') !== -1;

        if (!validity.valid) {
            if (validity.valueMissing) {
                error.textContent = `${label} is a required field`;
            } else if (validity.typeMismatch) {
                error.textContent = `${label} should be a valid email address`;
            } else if (isPassword && validity.patternMismatch) {
                error.textContent = `${label} should be longer than 4 characters`;
            }
            return false;
        }

        error.textContent = '';
        return true;
    }

    render() {
        return (
            <div className="wrapper">
                <div className={classes.loginContainer}>
                    <h1>Log In</h1>
                    <div className={classes.login}>
                        <form action="" noValidate onSubmit={this.submitHandler}>
                            <div className={classes.inputGroup}>
                                <label id="emailLabel">Email Address</label>
                                <input type="email"
                                    name="email"
                                    placeholder="name@gmail.com" required
                                    value={this.state.formControls.email.value}
                                    onChange={this.changeHandler}
                                />
                                <div className={classes.error} id="emailError" />
                            </div>
                            <div className={classes.inputGroup}>
                                <label id="passwordLabel">Password</label>
                                <input type="password"
                                    name="password"
                                    placeholder="Password"
                                    required pattern=".{5,}"
                                    value={this.state.formControls.password.value}
                                    onChange={this.changeHandler} />
                                <div className={classes.error} id="passwordError" />
                            </div>
                            <div>
                                <button className="btn btn-primary btn-block" type="submit">Log In</button>
                            </div>
                        </form>
                        <p>Forgot password? <Link to="/signup">Click Here</Link></p>
                        <p>Don’t have an account?
                <Link to="/signup">Sign up</Link>
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}
export default Login;

