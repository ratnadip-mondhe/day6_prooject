import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {
let [name] =useState("cdac");
let [counter]=useState(100);
let [list]=useState(["delhi","goa"]);
let [std1]=useState({name:"Diamond"});//object literals

 return(
   <div><h1>Learning to  declare stateful variable</h1>
   <h1>String::{name} </h1>
   <h1>Number ::{counter} </h1>
   <h1>List ::{list} </h1>
   <h1>Object ::{std1.name} </h1>
   <h1>objetc::{JSON.stringify(std1)} </h1>
   </div>
 )
 


}

export default App;
