import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LaundryPage from './pages/LaundryPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/main' element={<MainPage/>}/>
        <Route path='laundry' element={<LaundryPage/>}/>  
      </Routes>
    </Router>
  );
}

export default App;