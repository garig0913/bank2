import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Template from './Components/Dashboard/Template';
import Home from './Components/Content/Home/Home'
import CardSection from './Components/Content/Card/CardSection'
import Exchange from './Components/Content/Transaction/Exchange'

ReactDOM.render(
  <Router>
    <Template>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/transaction" element={<Exchange />} />
        <Route exact path="/card" element={<CardSection />} />
      </Routes>
    </Template>
  </Router>,
  document.getElementById('root')
);