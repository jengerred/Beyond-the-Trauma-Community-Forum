import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
import ResourcesPage from './pages/ResourcesPage';
import Tactic1 from './pages/Tactic1';
import Tactic2 from './pages/Tactic2';
import Tactic3 from './pages/Tactic3';
import Tactic4 from './pages/Tactic4';
import Tactic5 from './pages/Tactic5';
import Tactic6 from './pages/Tactic6';
import Tactic7 from './pages/Tactic7';
import Tactic8 from './pages/Tactic8';

function App() {
  return (
    <>

    <Router>
    <NavBar/>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
  
        <Route path="/TopicsPage"  element={<TopicsPage/>}/>
        <Route path="/ResourcesPage"  element={<ResourcesPage/>}/>

        <Route path="/Tactic1"  element={<Tactic1/>}/>
        <Route path="/Tactic2"  element={<Tactic2/>}/>
        <Route path="/Tactic3"  element={<Tactic3/>}/>
        <Route path="/Tactic4"  element={<Tactic4/>}/>
        <Route path="/Tactic5"  element={<Tactic5/>}/>
        <Route path="/Tactic6"  element={<Tactic6/>}/>
        <Route path="/Tactic7"  element={<Tactic7/>}/>
        <Route path="/Tactic8"  element={<Tactic8/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
