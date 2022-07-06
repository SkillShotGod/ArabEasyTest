import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/sidebar/Sidebar';
import Account from './pages/Account'
import Home from './pages/Home';



const App =()=> {
  return (
    <>
    <Router>

    <Header />
    <Sidebar />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
