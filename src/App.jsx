import React from 'react';

import Weather from "./Weather";
import './App.css'

 export default function App(props) {

  return (
    <div className="App">
<div className='container'>


      
      < Weather defaultCity ="New York" />
      <footer>
        This project was coded by{" "} 
        <a href = "" target="_blank">
          Tess Allen
      </a>{" "}
       
        
         and is{" "}
        <a href="https://github.com/tessallen-cmd/my-app-test" 
        target="_blank"
        
 >
           open-sourced on Github
        </a>
      </footer>
      </div>
    </div>
  );
  }

 
         
        
      
          
          
         
              
                 
             
              
                  