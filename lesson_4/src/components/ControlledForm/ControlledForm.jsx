import { Component } from "react";
import { nanoid } from "nanoid";

import style from "./ControlledForm.module.css";

const Gender = {
    MALE: "male",
    FEMALE: "female",
};

const INITIAL_STATE = {
    login: "",
    loginError: "",
    email: "",
    emailError: "",
    password: "",
    gender: null,
    age: "",
    newsletter: false
}



class ControlledForm extends Component {
    state = {...INITIAL_STATE}

    loginInputId = nanoid();
    emailInputId = nanoid();
    passInputId = nanoid();
    newsletterInputId = nanoid();

    handleSubmit = evt => {
        evt.preventDefault();

        console.log(this.state)

        this.handleReset();
    };

    handleReset = () => {
        this.setState({...INITIAL_STATE})
    }

    handleChange = evt => {
        const { name, value, type, checked } = evt.target;

        if (name === 'login') {
            if (value.length === 0) {
                this.setState({loginError: "This is required value"})
            } else if (value.length < 6) {
                this.setState({loginError:"Minimum length is 6"})
            } else if (value.length > 20) {
                this.setState({loginError: "Max length is 20"})
            } else {
                this.setState({loginError: ""})
            }
        } else if (name === 'email') {
            this.setState({emailError: value.length < 10 ? "Minimum length is 10" : ""})
        }

        this.setState({ [name]: type === "checkbox" ? checked : value });
    };

    render() {
        const { login, loginError, email, emailError, password, gender, age, newsletter } = this.state;

        return (
            <div className={style.wrapper} onClick={this.wrapperClick}>
                <h3>Controlled form</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={this.loginInputId}>Login</label>
                    <input
                        type="text"
                        name="login"
                        id={this.loginInputId}
                        value={login}
                        onChange={this.handleChange}
                    />
                    {loginError ? <span className={style.error}>{loginError}</span> : null}
                    <label htmlFor={this.emailInputId}>Email</label>
                    <input
                        type="text"
                        name="email"
                        id={this.emailInputId}
                        value={email}
                        onChange={this.handleChange}
                    />
                    {emailError ? <span className={style.error}>{emailError}</span> : null}
                    <label htmlFor={this.passInputId}>Password</label>
                    <input
                        type="password"
                        name="password"
                        id={this.passInputId}
                        value={password}
                        onChange={this.handleChange}
                    />
                    <fieldset>
                        <legend>Gender</legend>
                        <label>
                            <input
                                type="radio"
                                checked={gender === Gender.MALE}
                                name="gender"
                                value={Gender.MALE}
                                onChange={this.handleChange}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                checked={gender === Gender.FEMALE}
                                name="gender"
                                value={Gender.FEMALE}
                                onChange={this.handleChange}
                            />
                            Female
                        </label>
                    </fieldset>
                    <label>
                        Choose your age
                        <select name="age" value={age} onChange={this.handleChange}>
                            <option value="" disabled>
                                ...
                            </option>
                            <option value="18-25">18-25</option>
                            <option value="26-35">26-35</option>
                            <option value="36+">36+</option>
                        </select>
                    </label>
                    <div className={style.checkboxWrapper}>
                        <label htmlFor={this.newsletterInputId}>Subscribe to Newsletter</label>
                        <input
                            type="checkbox"
                            name="newsletter"
                            id={this.newsletterInputId}
                            checked={newsletter}
                            onChange={this.handleChange}

                        />
                    </div>
                    <button type="submit">Register</button>
                    <button type="button" onClick={this.handleReset}>Reset</button>
                </form>
            </div>
        );
    }
}

export default ControlledForm;
