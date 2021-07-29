import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {

let [counter,setCounter]=useState(0);
let [list,setList]=useState(["Delhi","GOa","Kochi"]);

let updateCounter=()=>{
  // alert("something happens");
  let newvalue=counter+1;
  setCounter(newvalue);
};
let addNewElement=()=>{
  // alert("Something happens..");
  let newList=["Hello Everyonerr",...list];
  setList(newList);
};
 return(
   <div>
     <h1>Learning to  declare stateful variable</h1>
   <h1>Counter:: {counter}
   <input type="button" value="Increment" onClick ={updateCounter}/>
   </h1>
   <hr />
   
  <input type="buttton" value="Add New Element in List" onClick={addNewElement} />

  {list.map((item) =>{
    return ( <div className="bg-secondary text-light my-1 p-3 h4">
    {item} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime laboriosam libero, distinctio ipsam ipsum aperiam, sed, animi ducimus alias quod fugit qui veritatis eum dicta eaque consequatur eius nemo odio?
    </div>
    );
    })}
   </div>
 );
 
}

export default App;
