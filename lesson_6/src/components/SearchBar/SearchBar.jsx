import {Component} from "react";

import style from "./SearchBar.module.css";

class SearchBar extends Component {
    render() {
        const {handleSetSearchQuery, searchQuery} = this.props;

        return <div className={style.wrapper}>
            <label>
                Search:
                <input
                    type={"text"}
                    value={searchQuery}
                    onChange={handleSetSearchQuery}
                    placeholder={'Enter search text'}
                />
            </label>
        </div>
    }
}

export default SearchBar;
