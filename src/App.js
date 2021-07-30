import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [name] = useState("cdac"); // string varialble
  let [counter] = useState(100); // number variable
  let [active] = useState(false); // boolean
  let [list] = useState(["delhi", "mumbai"]); // Arrays or List
  let [std1] = useState({ name: "rahul" }); // Object Liiterals

  return (
    <div>
      <h1>Learning to Declare Stateful Variable</h1>
      <h1>String :: {name}</h1>
      <h1>Number :: {counter}</h1>
      <h1>Boolean :: {active + ""}</h1>
      <h1>List :: {list}</h1>
      <h1>Object :: {JSON.stringify(std1)}</h1>
      <h1>Objec :; {std1.name} </h1>
    </div>
  );
}

export default App;