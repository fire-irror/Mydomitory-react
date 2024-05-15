import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import LaundryPage from './pages/LaundryPage';
import MainPage from './pages/MainPage';
import ScorePage from './pages/ScorePage';
import SelectPage from './pages/SelectPage';
import ReservationPage from './pages/ReservationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SelectPage/>}/>
        <Route path='/main' element={<MainPage/>}/>
        <Route path='/laundry' element={<LaundryPage/>}/> 
        <Route path='/login' element={<LoginPage/>}/>  
        <Route path='/join' element={<JoinPage/>}/>  
        <Route path='/score' element={<ScorePage/>}/>  
        <Route path='/reservation' element={<ReservationPage/>}/>  
      </Routes>
    </Router>
  );
}

export default App;