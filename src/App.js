// @flow

import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieChoice from './pages/conditional_render';
import DataDisplay from './pages/data_display';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieChoice/>}/>
          <Route path='/data' element={<DataDisplay/>}/>
        </Routes>
      
      </BrowserRouter>
  );
}

export default App;
