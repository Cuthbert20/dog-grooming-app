import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from '../src/components/Nav/Nav'
import { withRouter } from 'react-router-dom'
import UserInfo from './components/UserInfo/UserInfo'
import { HeadingPrimary, HeadingMain, HeadingSub, AppMainContainer, ContactBtn } from './style'
import Contact from './components/Contact/Contact'

class App extends Component{
  state = {
    renderContact: false
  }
  handleClick = () => {
    this.setState({
      renderContact: !this.state.renderContact
    })
  }
  render(){
//   const onScroll = (e) => {
//     console.log('scrolling', e)
// }
console.log(this.state)
const { renderContact } = this.state
  return (
    <div >
    <div className="App">
     {this.props.location.pathname === "/" ? <HeadingPrimary><HeadingMain className='heading-main' >Dog Grooming</HeadingMain><HeadingSub className='heading-sub' >Where You can make your dogs pretty</HeadingSub></HeadingPrimary> : <Nav />}
     {routes}
    </div>
    <AppMainContainer>
      {renderContact ? <Contact /> : null }
      <ContactBtn onClick={this.handleClick} >Contact Us</ContactBtn>
    </AppMainContainer>
    {/* <AppArticle>
      {props.location.pathname === "/dashboard" && <UserInfo />}
    </AppArticle> */}
    </div>
    
  );
  }
}

export default withRouter(App);
