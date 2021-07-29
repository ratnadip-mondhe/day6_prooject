import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {

let [counter,setCounter]=useState(100);

let updateCounter=()=>{
  // alert("something happens");
  let newvalue=counter+1;
  setCounter(newvalue);
}
 return(
   <div><h1>Learning to  declare stateful variable</h1>
   <h1>Counter:: {counter}</h1>
   <input type="button" value="Increment" onClick ={updateCounter}/>
   </div>
 );
 


}

export default App;
