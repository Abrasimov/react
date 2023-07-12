import style from './CssModules.module.css'

const CssModules = () => {
    return <>
        <h2 className={style.root}>Normal</h2>
        <h2 className={style.warning}>Warning</h2>
        <h2 className={style.error}>Error</h2>
    </>
}

export default CssModules;
