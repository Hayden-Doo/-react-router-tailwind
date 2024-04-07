import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Login from '../../pages/login/Login';
import Layout from './layout/Layout';
import LayoutType from './layout/LayoutType';
import Signin from '../../pages/signin/Signin';

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route element={<LayoutType />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
