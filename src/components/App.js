import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 //code here 
 let [inp,setInp]=useState("");
  let [previnp,setprevinp]=useState("");
function changeInput(event){
  setInp(event.target.value);
}
  function buttonClick(event){
    event.preventDefault();
    setInp("");
    setprevinp(previnp+inp);
  }
 
  return (
    <div>
   {/* the <p> tag with id text will show the concatinated string as output on string 
      the <input> tag with id input will take input entered by user */}
  <input id='input' value={inp} onChange={changeInput} />
  
      <p id='intro'>Concated String</p>
      <p id='text'>{previnp}</p>
      <button id='button' onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}
