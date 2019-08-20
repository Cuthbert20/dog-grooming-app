import React from 'react';
import './App.css';
import routes from './routes';
import Nav from '../src/components/Nav/Nav'
import { withRouter } from 'react-router-dom'
import UserInfo from './components/UserInfo/UserInfo'

function App(props) {

//   const onScroll = (e) => {
//     console.log('scrolling', e)
// }
  return (
    <>
    <div className="App">
     {props.location.pathname === "/" ? <h4>Welcome</h4> : <Nav />}
     {routes}
    </div>
      {props.location.pathname === "/dashboard" && <UserInfo />}
    </>
    
  );
}

export default withRouter(App);
