import {Component} from "react";

class Increment extends Component {
    state = { value: 0 }

    handleIncrement = () => {
        this.setState({value: this.state.value + 1})
    }

    render() {
        return <>
            <h2>Value: {this.state.value}</h2>
            <button onClick={this.handleIncrement}>
                Increment
            </button>
        </>
    }
}

export default Increment;
