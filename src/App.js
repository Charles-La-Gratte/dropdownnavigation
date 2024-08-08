import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Title from './Components/Title';
import Description from './Components/Description';
import Picture from './Components/Picture';
import Button from './Components/Button';
import Sponsor from './Components/Sponsor';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
 
  return (
  <Router>
      <React.Fragment> 
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
        <Title/>
        <Description/>
        <Button/>
        <Sponsor/>
        <Picture/>
      </React.Fragment>
  </Router>
  );
}

export default App;
