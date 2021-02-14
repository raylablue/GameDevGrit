import React from 'react';
import "./fonts/iceland-v8-latin-regular.woff";
import "./styles/theme.scss"
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Router>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </>
  );
}

export default App;
