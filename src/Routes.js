import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from './store'

import App from './App';
import Favorites from './pages/Favorites';

export default function Routes() {
  return (
    <Router>
      <Provider store={store}>
      <Route exact path="/" component={App} />
      <Route path="/favorites" component={Favorites} />
      </Provider>
    </Router>
  );
}