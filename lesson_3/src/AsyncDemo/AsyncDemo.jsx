import {Component} from "react";

class AsyncDemo extends Component {
    state = { value: 0 }

    updateAsyncIncorrect = () => {
        // Run a loop and create 3 operations of update
        for (let i = 0; i < 3; i += 1) {
            // If you look at the state, all iterations will be 0
            // Because this is synchronous code and the state update hasn't happened yet
            console.log(this.state.value);



            this.setState({ value: i * 10 });
        }
    }

    updateAsyncCorrect = () => {
        // Run a loop and create 3 operations of update
        for (let i = 0; i < 3; i += 1) {
            this.setState(prevState => {
                console.log('1 set state',prevState.value)
                return { value: prevState.value + 1 };
            });
            this.setState(prevState => {
                console.log('2 set state',prevState.value)
                return { value: prevState.value + 1 };
            });
        }
    }

    render() {
        return <div>
            <h2>AsyncDemo counter: {this.state.value}</h2>
            <button onClick={this.updateAsyncIncorrect} style={{fontSize: 25, margin: 5}}>
                Update async incorrect
            </button>
            <button onClick={this.updateAsyncCorrect} style={{fontSize: 25, margin: 5}}>
                Update async correct
            </button>
        </div>
    }
}

export default AsyncDemo;
