
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 //code here 

 
  return (
    <div>
   {/* the <p> tag with id text will show the concatinated string as output on string 
      the <input> tag with id input will take input entered by user */}
  <input id='input' value={inputValue} onChange={changeInput} />
  
      <p id='intro'>Concated String</p>
      <p id='text'>{text} </p>
      <button id='button' onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}
