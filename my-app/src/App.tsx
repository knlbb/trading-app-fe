import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './screens/Dashboard';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './screens/Profile';
import Sidebar from './components/Sidebar';
import Study from './screens/Study';
import News from './screens/News';
import Wallet from './screens/Wallet';
import Stocks from './screens/Stocks';
import AI from './screens/AI';


// const express = require("express");
// const app = express();

// const cors = require("cors");

// app.use(cors())

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/news" element={<News />} />
        <Route path="/modules" element={<Study />} />
        <Route path="/ai" element={<AI/>} />
      </Routes>
	</BrowserRouter>
    // <div className="App">
    //   {/* <Header/> */}
    //   <Dashboard/>
    // </div>
  );
}

export default App;
