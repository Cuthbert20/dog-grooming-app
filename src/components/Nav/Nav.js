import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {userLogout} from '../../ducks/reducer'
//when Component is not in your routes.js to give it access to the routes you need to import withRouter
import {} from 'react-router-dom'
import axios from 'axios'
// import Button from 'react-bootstrap/Button';
import styled from 'styled-components'
import './Nav.css'
import { withRouter } from 'react-router-dom'

const NavWrapper = styled.div `
    /* outline: 5px solid white; */
    min-height: 40px;
    margin-bottom: 40px;
    /* border: 1px solid black; */
`;
const StyledNav = styled.div `
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
`;

class Nav extends Component{
    state= {
        scrolled: false
    }
    componentDidMount(){
        // console.log(window)
        window.document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 150;
            // console.log(isTop)
            if(isTop !== true) {
                this.setState({
                   scrolled: true 
                })
            }
            else {
                this.setState({
                    scrolled: false
                })
            }
        })
    }
    logout = async () => {
        let res = await axios.delete(`/auth/logout`)
        console.log(res)
        this.props.userLogout()
        this.props.history.push('/')
    }
    handleClick = () => {
        this.props.history.push('/dashboard')
    }

    render(){
        // console.log("props on nav ",this.props)
        //withRouter is what is giving me access to match, location, and history from this.props
        // const { cd .., location, history } = this.props;
        return(
            <NavWrapper className={this.state.scrolled && 'scrolled'}>
                <div>
                    {/* <img src="http://localhost:4001/static/logotrans.png" alt="logo" className="logo"/> */}
                </div>
            <StyledNav >
                {this.props.login_name ? <> <span id='welcome' >How you doin, {this.props.login_name}</span>
                <br/>
                <a className='nav-btn' onClick={this.handleClick}><i className="fad fa-home-lg-alt"></i></a> 
                <a className='nav-btn' onClick={this.logout} ><i className="fad fa-sign-out-alt"></i></a> </> : null}
                
            </StyledNav>
            </NavWrapper>
        )
    }
}
function mapStateToProps(reduxState){
    //destructuring username off of reduxState
    const {login_name} = reduxState
    return {
        login_name
    }
}

export default connect(mapStateToProps,{userLogout})(withRouter(Nav))