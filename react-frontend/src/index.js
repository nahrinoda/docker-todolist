//index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Header} from "./components/Header";

import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import UpdateTodo from './components/UpdateTodo';

import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <Header/>
      </div>
    </div>
    <div>
      <Router>
      <Switch>
      <Route path='/add' component={AddTodo} />
      <Route exact path='/' component={ListTodo} />
      <Route path='/update/:id' component={UpdateTodo} />
      </Switch>
      </Router>
    </div>
  </div>
);
