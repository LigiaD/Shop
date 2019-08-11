import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import './style/main.scss';


import Layout from './components/Layout';
import AccountLayout from './components/AccountLayout';
import history from './history';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import Account from './components/account/account';
import Shop from './components/shop/shop';
import Review from './components/order/review';
import Shipping from './components/information/shipping';
import Payment from './components/information/payment';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
          <Switch>
             <Route path="/" exact component={SignIn}/>
             <Route path='/signin' exact component={SignIn}/>
             <Route path='/signup' exact component={SignUp}/>

            <Route path='/shop' exact component={Shop}/>
          
          
            <Route path='/account' exact component={Account}/>  
          
            
             <Route path='/order/review' exact component={Review}/>

            <Route path='/information/shipping' exact component={Shipping}/>
            <Route path='/information/payment' exact component={Payment}/>
          </Switch>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
