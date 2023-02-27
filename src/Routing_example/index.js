import React from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Home from "./Home";
const RoutingExample = () => {
  return (
    <div>
      <h1>RoutingExample</h1>
      <div className="RoutingNav">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Redirect from="*" to="/not-found" />
      </Switch>
    </div>
  );
};

export default RoutingExample;
