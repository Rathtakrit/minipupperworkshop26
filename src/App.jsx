import React from 'react';
import Router from './routes/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/globals.css';

const App = () => {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;