import logo from '../logo.svg';
import './App.css';
import TodoList from "../TodoList";

function App() {
  return (
    <div className="App">
      <main className="wrapper">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList/>
      </main>
    </div>
  );
}

export default App;
