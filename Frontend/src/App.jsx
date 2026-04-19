import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Home/HomePage';
import Signup from './signup';
import Login from './login';
import Aboutus from './Aboutus';


function App() {
    return (
      <>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Aboutus' element={<Aboutus/>} />
        </Routes>
      </>
    );
}

export default App;