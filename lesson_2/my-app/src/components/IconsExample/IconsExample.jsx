import {AiFillAlert,AiFillAliwangwang,AiFillAndroid} from "react-icons/ai";

import style from './IconsExample.module.css';

const IconsExample = () => {
    return <div className={style.root}>
        <AiFillAlert color={'red'}/>
        <AiFillAliwangwang size={'60px'}/>
        <AiFillAndroid style={{padding: 10, border: "1px solid white"}}/>
    </div>
}

export default IconsExample;
