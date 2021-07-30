import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(100);
  let [name, setName] = useState("rahul");
  let [active, setActive] = useState(true);
  let [list, setList] = useState(["delhi", "mumbai"]);

  return (
    <div>
      <h1>Stateful Continue</h1>
      <h1>Counter :: {counter}</h1>
      <h1>LIst :: {list}</h1>
    </div>
  );
}

export default App;