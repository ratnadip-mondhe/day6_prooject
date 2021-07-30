import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  let [list, setList] = useState(["delhi", "mumbai"]);

  let updateCounter = () => {
    let newvalue = counter + 100;
    setCounter(newvalue);
  };

  let addNewElement = () => {
    // alert("something is happening....");
    let newlist = ["I am new Post", ...list];
    setList(newlist);
  };

  return (
    <div>
      <h1>Stateful Continue</h1>
      <h1>
        Counter :: 👍 {counter}
        <input type="button" value="Increment" onClick={updateCounter} />
      </h1>
      <hr />

      <input
        type="button"
        value="Add New Element in List"
        onClick={addNewElement}
      />
      {list.map((item) => {
        return <h1>{item}</h1>;
      })}
    </div>
  );
}

export default App;