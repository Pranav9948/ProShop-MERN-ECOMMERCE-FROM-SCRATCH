import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-4" style={{marginTop:'80px'}}>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;
