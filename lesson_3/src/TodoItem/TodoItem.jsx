import {Component} from "react";
import PropTypes from 'prop-types';

import style from './TodoItem.module.css';

class TodoItem extends Component {
    static defaultProps = {
        id: 'Default ID',
        title: 'Default title',
        description: 'Default description',
        collapsedByDefault: false
    };

    static propTypes = {
        collapsedByDefault: PropTypes.bool.isRequired,
        id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        handleDeleteItem: PropTypes.func.isRequired,
        handleCompleteTask: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        const {collapsedByDefault} = props;

        this.state = {
            isCollapsed: collapsedByDefault,
            isCompleted: false
        };
    }

    handleCollapse = (e) => {
        this.setState({isCollapsed: e.target.checked})
    }

    handleComplete = (e) => {
        this.setState({isCompleted: e.target.checked})
    }

    render() {
        const {id, title, description, handleDeleteItem} = this.props;

        return <div className={this.state.isCompleted ? style.containerCompleted : style.container}>
            <div className={style.checkboxesWrapper}>
                <label className={style.label}>
                    <input
                        type={'checkbox'}
                        checked={this.state.isCollapsed}
                        onChange={this.handleCollapse}
                        style={{width: 20, height: 20}}
                    />
                    Collapse
                </label>
                <label className={style.label}>
                    <input
                        type={'checkbox'}
                        checked={this.state.isCompleted}
                        onChange={this.handleComplete}
                        style={{width: 20, height: 20}}
                    />
                    Completed
                </label>
                <button onClick={() => {handleDeleteItem(this.props.id)}}>X</button>
            </div>
            <div className={this.state.isCollapsed ? style.itemBodyCollapsed : style.itemBody}>
                <h3>ID: {id}</h3>
                <p>Title: {title}</p>
                <p>Text: {description}</p>
            </div>
        </div>;
    }
}

export default TodoItem;
