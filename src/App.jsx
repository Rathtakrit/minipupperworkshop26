import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Program from './pages/Program';
import Directions from './pages/Directions';
import Resources from './pages/Resources';
import './styles/globals.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registration" component={Registration} />
          <Route path="/program" component={Program} />
          <Route path="/directions" component={Directions} />
          <Route path="/resources" component={Resources} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;