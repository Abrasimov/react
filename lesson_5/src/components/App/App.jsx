import logo from './logo.svg';
import './App.css';
import Notes from "../Notes";
import CreateNoteForm from "../ControlledForm";
import {Component} from "react";
import CreateNoteSwitcher from "../CreateNoteSwitcher";
import {nanoid} from "nanoid";

class App extends Component {
    state = {
        isCreatingNote: false,
        notesData: []
    }

    localStorageRecordName = 'notesData';

    handleToggleCreateMode = () => {
        this.setState((prevState) => {
            return  {isCreatingNote: !prevState.isCreatingNote}
        })
    }

    handleCreateNote = (noteData) => {
        this.setState((prevState) => {
            const noteWithKey = {...noteData, key: nanoid()}

            const updatedNotesData = [...prevState.notesData, noteWithKey];

            localStorage.setItem(this.localStorageRecordName, JSON.stringify(updatedNotesData))

            return {notesData: updatedNotesData}
        })
    }

    componentDidMount() {
        const savedNotesData = localStorage.getItem(this.localStorageRecordName);

        this.setState({notesData: savedNotesData ? JSON.parse(savedNotesData) : []});
    }

    render() {
        const { isCreatingNote, notesData } = this.state;

        return (
            <div className="App">
                <main className="App-main">
                    <button id={'test'}>Test</button>
                    <img src={logo} className="App-logo" alt="logo" />
                    <CreateNoteSwitcher handleToggleCreateMode={this.handleToggleCreateMode}/>
                    {
                        isCreatingNote
                        ? <CreateNoteForm handleCreateNote={this.handleCreateNote}/>
                        : <Notes data={notesData}/>
                    }
                </main>
            </div>
        );
    }
}

export default App;
