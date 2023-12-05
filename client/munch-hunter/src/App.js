import React from 'react';
import Body from "./pages/Body";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <div className='App'>
      <Router>
      <UserProvider>
      <Routes>

        <Route path="/" element= {<Body />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/signup" element= {<Signup />} />
        <Route path="/Home" element= {<Home />} />

      </Routes>
      </UserProvider>
      </Router>

      
    </div>
  )
}

export default App
