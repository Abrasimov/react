import './Text.css'

const Text = ({children}) => {
    return <>
        <h4 className={'text__heading'}>Text component heading</h4>
        <p>Text component text: {children}</p>
    </>
}

export default Text;
