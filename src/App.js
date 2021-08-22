import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Section from './components/Section';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Section" component={Section}/>
    </Switch>
    </BrowserRouter>

    // <>
    // <Header />
    // <Section />
    // </>
  );
}

export default App;
