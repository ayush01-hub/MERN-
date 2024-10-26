import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './loginPage';
import ReagistrationPage from './registrationPage';




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element= {<LoginPage/>}/>
          <Route path='/register' element= {<ReagistrationPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

