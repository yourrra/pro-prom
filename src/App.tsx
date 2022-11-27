import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CardProduct from './components/card/CardProduct';
import CardProductList from './components/card/CardProductList';
import MyFooter from './components/footer/MyFooter';
import MyHeader from './components/header/MyHeader';

function App() {
  return (
    <BrowserRouter>
      <MyHeader />
      <div>
        <Routes>
          <Route path={'/tabs'} element={<CardProductList />}>
          </Route>
        </Routes>
      </div>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
