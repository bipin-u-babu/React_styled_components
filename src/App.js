import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from "react-router-dom";

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import Error from "./components/Error";



function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path = "/" component = {ProductList}/>
        <Route path = "/details" component = {Details}/>
        <Route path = "/cart" component = {Cart}/>
        <Route  component = {Error}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
