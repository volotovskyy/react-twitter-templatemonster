import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import {hashHistory, Router, Route, Redirect} from 'react-router';

import Layout from './layout'

import TestPage from './pages/test'
import DescPage from './pages/desc'

const app = (
  <Router history={hashHistory}>
    <Redirect from="/" to="/test" />
    <Route path="/" component={Layout}>
      <Route path="test" component={TestPage} />
      <Route path="desc" component={DescPage} />
    </Route>
  </Router>
)

jQuery(function() {
  ReactDOM.render(
    app,
    document.getElementById('comment-box'),
    function() {
      console.timeEnd('react-app')
    }
  );
})
