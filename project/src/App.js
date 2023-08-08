import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import SenoritaHotel from './components/SenoritaHotel';
import Introduction from './components/Introduction';
import Service from './components/Service';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/senorita-hotel" component={SenoritaHotel} />
        <Route path="/introduction" component={Introduction} />
        <Route path="/service" component={Service} />
      </Switch>
    </Router>
  );
};

export default App;