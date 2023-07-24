import logo from './logo.svg';
import './App.css';
import Form from "../Form";
import ControlledForm from "../ControlledForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form/>
        <ControlledForm/>
      </header>
    </div>
  );
}

export default App;
