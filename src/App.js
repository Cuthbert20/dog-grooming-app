import React from 'react';
import './App.css';
import routes from './routes';
import Nav from '../src/components/Nav/Nav'
import { withRouter } from 'react-router-dom'

function App(props) {
  return (
    <div className="App">
     App
     {props.location.pathname === "/" ? null : <Nav />}
     {routes}
    </div>
    
  );
}

export default withRouter(App);
