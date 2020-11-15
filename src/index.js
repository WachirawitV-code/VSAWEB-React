import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Get from './Get';
import Marklabel from './components/Marklabel';
import Home from './components/Home'
import {Router,Route,Link} from 'react-router'
import { browserHistory } from 'react-router';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}/>
    <Route path='/Get' component={Get}/>
    <Route path='/Home' component={Home}/>
    <Route path='/Draw' component={Marklabel}/>
  </Router>,document.getElementById('root')
);


