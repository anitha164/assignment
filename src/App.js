import React from 'react';

import './App.css';
import FunctionClick from './FunctionClick';

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
        <h1>Registration Form</h1>
        <p className="this">This is Example Registration Form</p>
            
            <p className="T">1</p>
            <p className="rectangle24"></p>
            <p className="ellipse"></p>
            <p className="rectangle25"></p>
      <div><h2>Title of the Form</h2> 
        <p className="line"></p> 
        
      </div>
      <div className="dropdownselect">
        
        
        <p id="cou">Country</p>
        <p className="nana"></p>
        <select id="sele">
            <option>Cedula fisica</option>
        </select>
        
        
      </div>
      <div className="input">
        
        
        <p id="Num">Number</p>
        
        <input placeholder="0-000-000" id="input"></input>
        <p id="no"></p>
        
        
      </div>
      <div>
      <FunctionClick/>
     


    
      
        
      </div>
      
      
      
      
      
        
        
        
        
         
         
      </header>
      
    </div>
  );
}

export default App;
