import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Title from './Components/Title';
import Description from './Components/Description';
import Picture from './Components/Picture';
import Button from './Components/Button';

function App() {
 
  return (
    <React.Fragment>
      <Navbar>
        
      </Navbar>
      <Title/>
      <Description/>
      <Button/>
      <Picture/>
     
    </React.Fragment>
  );
}

export default App;
