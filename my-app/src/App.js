import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import UserOpt from './components/Otp';
import Register from './components/Register';
import Dashboard from './components/dashboard';
import Lock from './components/Lock';
import Navbar from './components/navbar/navbar';
import './style.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}  />
        <Route path='/lock' element={<Lock />} />
        <Route path='/' element={<Register />}  />
        <Route path='login' element={<Login />}  />
        <Route path='/user-authentication' element={<UserOpt />}  />
      </Routes>
    </div>
  );
}

export default App;
