import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/dangnhap/Login';
import Senoritahotel from './components/trangchu/Senoritahotel';
import Introduction from './components/gioithieu/Introduction';
import Service from './components/dichvu/Service';
import Contact from './components/lienhe/Contact';
import Booking from './components/datphong/Booking';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/senorita-hotel" component={Senoritahotel} />
        <Route path="/introduction" component={Introduction} />
        <Route path="/service" component={Service} />
        <Route path="/lien-he" component={Contact} />
        <Route path="/booking" component={Booking}/>
      </Switch>
    </Router>
  );
};

export default App;