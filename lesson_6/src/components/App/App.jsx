import logo from './logo.svg';
import './App.css';
import News from "../News";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <News/>
      </header>
    </div>
  );
}

export default App;
