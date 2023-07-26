import {Component} from "react";

import style from './Spinner.module.css'

class Spinner extends Component {
    render() {
        return <div className={style.wrapper}>
            <div className={style.spinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    }
}

export default Spinner;
