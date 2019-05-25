import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "pizzalike";
import { useFetchData } from "./components/useFetch";
const App: React.FC = () => {
  const data = useFetchData();
  // TODO: this seems hacky....
  if (data !== null) {
    console.log(data);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button text="test" class="primary" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
