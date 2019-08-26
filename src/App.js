import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from '../src/components/Nav/Nav'
import { withRouter } from 'react-router-dom'
// import UserInfo from './components/UserInfo/UserInfo'
import { HeadingPrimary, HeadingMain, HeadingSub, AppMainContainer, ContactBtn } from './style'
import Contact from './components/Contact/Contact'
import Swal from 'sweetalert2'
import axios from 'axios'

class App extends Component{
  state = {
    renderContact: false,
    // user_msg: ''
  }
  handleClick = () => {
    this.setState({
      renderContact: !this.state.renderContact
    })
  }
  contactClick = () => {
    const { user_msg } = this.state
    Swal.fire({
      input: 'textarea',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    .then(res => {
      // console.log('res', res.value)
      this.setState({
        user_msg: res.value
      })
      // console.log(this.state.user_msg)
    })
    .then(res => {
      const {user_msg} = this.state
      axios.post('/auth/contact', {user_msg})
    })
  }
  render(){
//   const onScroll = (e) => {
//     console.log('scrolling', e)
// }
// console.log(this.state)
const { renderContact } = this.state
  return (
    <div >
    <div className="App">
     {this.props.location.pathname === "/" ? <HeadingPrimary><HeadingMain className='heading-main' >Dog Grooming</HeadingMain><HeadingSub className='heading-sub' >Where You can make your dogs pretty</HeadingSub></HeadingPrimary> : <Nav />}
     {routes}
    </div>
    <AppMainContainer>
      {renderContact ? <Contact /> : null }
      <ContactBtn onClick={this.contactClick} >Contact Us</ContactBtn>
    </AppMainContainer>
    {/* <AppArticle>
      {props.location.pathname === "/dashboard" && <UserInfo />}
    </AppArticle> */}
    </div>
    
  );
  }
}

export default withRouter(App);
