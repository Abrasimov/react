import './App.css';

import CssModules from "../CssModules/CssModules";
import Emotion from "../Emotion/Emotion";
import Text from "../Text";
import IconsExample from "../IconsExample";

import logo from './logo.svg';

import style from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className={'App-header'}>
        <h2 className={'app--heading'}>Heading example (App.js)</h2>
        <Text>
          Lorem ipsum dolor sit amet.
        </Text>
        <h1 className={style.root}>H1 from App.js</h1>
        <CssModules/>
        <Emotion/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <IconsExample/>
      </header>
    </div>
  );
}

export default App;
