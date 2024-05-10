import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
// import LaundryPage from './pages/LaundryPage';
import MainPage from './pages/MainPage';
import SelectPage from './pages/SelectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SelectPage/>}/>
        <Route path='/main' element={<MainPage/>}/>
        {/* <Route path='laundry' element={<LaundryPage/>}/>   */}
        <Route path='/login' element={<LoginPage/>}/>  
        <Route path='/join' element={<JoinPage/>}/>  

      </Routes>
    </Router>
  );
}

export default App;