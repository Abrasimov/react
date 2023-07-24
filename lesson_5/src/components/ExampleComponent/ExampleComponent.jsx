import React, { Component } from "react";

class ExampleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log("Component is mounted!");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')

        if (prevState.count !== this.state.count) {
            console.log('INSIDE IF BLOCK')
            this.setState({count: this.state.count});
        }
    }

    handleIncrement = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>Example Component</h1>
                <p>Count: {count}</p>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}

export default ExampleComponent;
