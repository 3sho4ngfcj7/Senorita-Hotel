import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import SenoritaHotel from './components/SenoritaHotel';
import Introduction from './components/Introduction';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/senorita-hotel" component={SenoritaHotel} />
        <Route path="/introduction" component={Introduction} />
      </Switch>
    </Router>
  );
};

export default App;