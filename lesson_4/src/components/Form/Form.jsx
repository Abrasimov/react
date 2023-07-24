import { Component } from "react";

import style from './Form.module.css';

class Form extends Component {
    state = {
        successMessage: ''
    }

    handleSubmit = evt => {
        evt.preventDefault();

        const form = evt.currentTarget;

        const email = form.elements.email.value;
        const password = form.elements.password.value;

        console.log(email, password);

        this.setState({successMessage: 'Well done!'})

        form.reset();
    };

    // Difference between target and currentTarget
    wrapperClick = evt => {
        console.log("evt.target => ", evt.target)
        console.log("evt.currentTarget => ", evt.currentTarget)
    }

    render() {
        const {successMessage} = this.state;

        return (
            <div className={style.wrapper} onClick={this.wrapperClick}>
                <h3>Default form (not controlled)</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="email"
                        required
                    />
                    <input type="password" name="password" />
                    <button type="submit">Login</button>
                </form>
                {this.state.successMessage ? <p>{this.state.successMessage}</p> : null}
            </div>
        );
    }
}

export default Form;
