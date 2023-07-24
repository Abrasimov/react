import { Component } from "react";
import PropTypes from "prop-types";

import style from './Notes.module.css';

class Notes extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
            noteTitle: PropTypes.string.isRequired,
            noteText: PropTypes.string.isRequired,
            key: PropTypes.string.isRequired,
        }))
    }

    constructor(props = []) {
        super(props);

        this.state = {
            data: props.data,
            searchPhrase: "",
        }
    }

    // This method is rarely used in practice.
    // Called before render(), on mount, and before all subsequent calls to render, i.e. after updating state or props
    // Can be used to set state depending on props each time they change
    // Should return an object to update the state with, or null if nothing needs to be updated
    // No access to this
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            data: nextProps.data
        }
    }

    handleSearch = (e) => {
        this.setState({searchPhrase: e.target.value})
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return {test: 1}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('snapshot >>> ', snapshot)
    }

    render() {
        const {data, searchPhrase, anotherState} = this.state;

        return (
            <div className={style.wrapper}>
                {
                    data.length > 0
                    ? <label>
                        Search note by title:
                        <input style={{marginLeft: 10}} onChange={this.handleSearch}/>
                    </label> : null
                }
                {
                    data.length > 0
                    ? data.filter(noteData => noteData.noteTitle.includes(searchPhrase)).map(note => {
                        return <div key={note.key} className={style.noteWrapper}>
                            <h3>Title: {note.noteTitle}</h3>
                            <p>Text: {note.noteText}</p>
                        </div>
                    })
                    : <h2>No notes created yet</h2>
                }
            </div>
        );
    }
}

export default Notes;
