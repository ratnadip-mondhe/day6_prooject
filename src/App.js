import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { HelloWorld } from "./pages/HelloWorld";
import { HelloUniverse } from "./pages/HelloUniverse";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <MyCompoenent />
    </div>
  );
}

function MyCompoenent() {
  let [list, setList] = useState(["delhi"]);

  const postYourThought = () => {
    const newlist = ["New Thought", ...list];
    setList(newlist);
  };

  return (
    <div className="m-2">
      <h1>Work with Forms</h1>

      <input
        type="text"
        className="form-control form-control-lg my-2"
        style={{ height: 75 }}
        placeholder="Post your thought"
      />
      <input
        type="button"
        className="btn btn-primary w-100"
        value="POST YOUR THOUGHT"
        onClick={postYourThought}
      />

      <div className="h1 bg-light my-1 p-3 text-primary border">
        Thought List
      </div>

      {list.map((item) => {
        return <div className="alert alert-primary mt-1">{item}</div>;
      })}
    </div>
  );
}