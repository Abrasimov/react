import {Component} from "react";

class Error extends Component {
    render() {
        const {error} = this.props;

        console.log(error)

        return <div>
            <h2>Error occurred!</h2>
            <p>Message: {error.message || "Unexpected error"}</p>
            <p>Code: {error.code}</p>
        </div>
    }
}

export default Error;
