import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {userLogout} from '../../ducks/reducer'
//when Component is not in your routes.js to give it access to the routes you need to import withRouter
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'

const NavWrapper = styled.div `
    /* outline: 5px solid white; */
    min-height: 32px;
`
const StyledNav = styled.div `
    position: fixed;
    left: 50%;
    transform: translateX(-50%);

    &:hover{
        background-color: purple;
    }

    &:focus{
        /*  */
    }
`;

class Nav extends Component{
    
    logout = async () => {
        let res = await axios.delete(`/auth/logout`)
        this.props.userLogout()
        this.props.history.push('/')
    }

    render(){
        console.log("props on nav ",this.props)
        //withRouter is what is giving me access to match, location, and history from this.props
        // const { match, location, history } = this.props;
        return(
            <NavWrapper>
            <StyledNav >
                {this.props.login_name ? <> <span>How you doin, {this.props.login_name}</span>
                <Link to='/dashboard'><Button size='sm' variant="outline-danger">Home</Button></Link> <Button size='sm' variant="outline-primary" onClick={this.logout} >Logout</Button> </> : null}
                
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