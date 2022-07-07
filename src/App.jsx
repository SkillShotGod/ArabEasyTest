import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar';
import Account from './pages/Account'
import Home from './pages/Home';
import MobileRoute from './components/shared/MobileRoute';
import ProfileInformation from './pages/account/ProfileInformation';


const App =()=> {
  return (
    <>
    <Router>

    <Header />
    <Sidebar />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path ='/profile-information' element={<MobileRoute/>} >
          <Route path = '/profile-information' element = {<ProfileInformation />} />
        </ Route>

        
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
