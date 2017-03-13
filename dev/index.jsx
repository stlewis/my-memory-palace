import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, IndexLink, hashHistory} from 'react-router';

import App from './components/app.jsx';
import StartPalace from './components/start_palace.jsx';
import SetLoci from './components/set_loci.jsx';
import AddItems from './components/add_items.jsx';
import Trainer from './components/trainer.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={StartPalace} />
      <Route path="set-loci" component={SetLoci} />
      <Route path="add-items" component={AddItems} />
      <Route path="trainer" component={Trainer} />
    </Route>
  </Router>, 
  document.querySelector('.main-content'));
