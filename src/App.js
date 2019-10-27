import React from 'react';
import ReactDOM from 'react-dom';
import "./fonts/iceland-v8-latin-regular.woff";
import "./styles/theme.scss"
import './App.scss';
import About from "./components/pages/About/About";
import Community from "./components/pages/Community/Community";
import Listen from "./components/pages/Listen/Listen";
import Home from "./components/pages/Home/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));

function App() {
  return (
    <>
        <Router>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>

                <Route path="/community">
                    <Community/>
                </Route>

                <Route path="/listen">
                    <Listen/>
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
