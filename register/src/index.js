import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import './styles/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
