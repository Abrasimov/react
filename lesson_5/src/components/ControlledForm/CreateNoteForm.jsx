import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import style from "./CreateNoteForm.module.css";

const INITIAL_STATE = {
    noteTitle: "",
    noteText: ""
}

class CreateNoteForm extends Component {
    static propTypes = {
        handleCreateNote: PropTypes.func.isRequired
    }

    state = {...INITIAL_STATE}

    noteTitleId = nanoid();
    noteTextId = nanoid();

    handleSubmit = evt => {
        evt.preventDefault();

        this.props.handleCreateNote(this.state)
        this.handleReset();
    };

    handleReset = () => {
        this.setState({...INITIAL_STATE})
    }

    handleChange = evt => {
        const { name, value } = evt.target;

        this.setState({ [name]: value });
    };


    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const { noteTitle, noteText } = this.state;

        return (
            <div className={style.wrapper}>
                <h3>Create new note</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={this.noteTitleId}>Note title</label>
                    <input
                        type="text"
                        name="noteTitle"
                        id={this.noteTitleId}
                        value={noteTitle}
                        onChange={this.handleChange}
                    />
                    <label htmlFor={this.noteTextId}>Note text</label>
                    <textarea
                        type="text"
                        name="noteText"
                        id={this.noteTextId}
                        value={noteText}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Create note</button>
                    <button type="button" onClick={this.handleReset}>Reset form</button>
                </form>
            </div>
        );
    }
}

export default CreateNoteForm;
