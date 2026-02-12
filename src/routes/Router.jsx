import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Program from '../pages/Program';
import Directions from '../pages/Directions';
import Resources from '../pages/Resources';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/registration" component={Registration} />
                <Route path="/program" component={Program} />
                <Route path="/directions" component={Directions} />
                <Route path="/resources" component={Resources} />
            </Switch>
        </Router>
    );
};

export default AppRouter;