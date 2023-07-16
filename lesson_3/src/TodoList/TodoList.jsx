import {Component} from "react";

import INITIAL_STATE from './initialState.json';
import TodoItem from "../TodoItem";

import style from './TodoList.module.css';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: INITIAL_STATE,
        };
    }

    handleDeleteItem = (id) => {
        this.setState((prevState) => {
            return {data: prevState.data.filter(item => item.id !== id)}
        })
    }

    render() {
        return <div className={style.wrapper}>
            {this.state.data.map((item) =>
                <TodoItem
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    handleDeleteItem={this.handleDeleteItem}
                    key={item.id}
                />
            )}
        </div>;
    }
}

export default TodoList;
