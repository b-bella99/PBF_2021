import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./components/protectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Join";
import About from "./components/About";
import ProductHealth from './components/ProductHealth'
import ProductSkincare from './components/ProductSkincare';

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="/login" component={Login} />
      <Route path="/join" component={Register} />
      <Route path="/about" component={About} />
      <Route path="/healthcare" component={ProductHealth} />
      <Route path="/skincare" component={ProductSkincare} />
      
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);