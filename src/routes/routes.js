import React,{ Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import asyncComponent from '../component/common/asyncComponent';
import PropTypes from "prop-types";
import App from "../App";
const AsyncHome = asyncComponent(() => import('../pages/home/home'));
const Asyncuser = asyncComponent(() => import('../pages/user/user'));

export const AppRouter = () => {
  return (
          <Router>
              <Fragment>
                  <App>
                      <Switch>
                          <Route exact path="/" component={({ history }) => <AsyncHome history={history} />} />
                          <Route exact path="/user" component={({ history }) => <Asyncuser history={history} />} />
                          <Route exact path="/user/:id" component={({ history }) => <Asyncuser history={history} />} />
                      </Switch>
                  </App>
              </Fragment>
          </Router>
  );
};
AppRouter.propTypes = {
};

