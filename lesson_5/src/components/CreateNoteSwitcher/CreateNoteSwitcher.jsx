import {Component} from "react";
import PropTypes from 'prop-types'

import style from './CreateNoteSwithcer.module.css'

class CreateNoteSwitcher extends Component {
    static propTypes = {
        handleToggleCreateMode: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <span className={style.noteWrapper}>Create new note mode:</span>
                <label className={style.switch}>
                    <input type="checkbox" onChange={this.props.handleToggleCreateMode}/>
                    <span className={style.slider}></span>
                </label>
            </div>
        )
    }
}

export default CreateNoteSwitcher;
