import {Component} from "react";

import INITIAL_STATE from './initialState.json';
import TodoItem from "../TodoItem";

import style from './TodoList.module.css';
import Increment from "../Increment";
import AsyncDemo from "../AsyncDemo";

class TodoList extends Component {
    state = {
        data: INITIAL_STATE
    };

    handleDeleteItem = (id) => {
        this.setState((prevState) => {
            return {data: prevState.data.filter(item => item.id !== id)}
        })
    }

    handleCompleteTask = (e) => {
        this.setState(({completedTasks}) => {
            const isTaskMarkedAsCompleted = e.target.checked;

            return {completedTasks: isTaskMarkedAsCompleted ? completedTasks + 1 : completedTasks - 1}
        })
    }

    render() {
        return <div className={style.wrapper}>
            <div className={style.incrementWrapper}>
                {/*<Increment/>*/}
                {/*<AsyncDemo/>*/}
                {/*<h3>State value in TodoList component: {this.state.test}</h3>*/}
                {/*<button*/}
                {/*    onClick={() => this.setState({test: this.state.test += 1})}*/}
                {/*    style={{fontSize: 25, margin: 5}}*/}
                {/*>*/}
                {/*    Increment*/}
                {/*</button>*/}
                <h2>Completed tasks: {this.state.completedTasks}</h2>
            </div>
            <div className={style.todoItemsWrapper}>
                {this.state.data.map((item, index) =>
                    <TodoItem
                        collapsedByDefault={false}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        handleDeleteItem={this.handleDeleteItem}
                        key={item.id}
                    />
                )}
            </div>
        </div>;
    }
}

export default TodoList;
