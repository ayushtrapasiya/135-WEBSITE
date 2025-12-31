// App.jsx
import React, { Suspense } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import 'animate.css';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import './App.css';

export default function App() {
  return (
    <div className='main'>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<div className="loader"></div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}
