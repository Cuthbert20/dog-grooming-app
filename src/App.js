import React from 'react';
import './App.css';
import routes from './routes';
import Nav from '../src/components/Nav/Nav'
import { withRouter } from 'react-router-dom'
import UserInfo from './components/UserInfo/UserInfo'
import { AppArticle, HeadingPrimary, HeadingMain, HeadingSub } from './style'

function App(props) {

//   const onScroll = (e) => {
//     console.log('scrolling', e)
// }
  return (
    <div>
    <div className="App">
     {props.location.pathname === "/" ? <HeadingPrimary><HeadingMain className='heading-main' >Dog Grooming</HeadingMain><HeadingSub className='heading-sub' >Where You can make your dogs pretty</HeadingSub></HeadingPrimary> : <Nav />}
     {routes}
    </div>
    <AppArticle>
      {props.location.pathname === "/dashboard" && <UserInfo />}
    </AppArticle>
    </div>
    
  );
}

export default withRouter(App);
