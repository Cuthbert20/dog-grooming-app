import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UpdateUser from '.././UpdateUser/UpdateUser'
import AddUserInfo from '.././AddUserInfo/AddUserInfo'
import { PinkButton } from '../../style'
import './UserDash.css'

export default class UserDash extends Component {
    state = {
        render: false,
        userRender: false
    }
    handleClick = () => {
        // const { render } = this.state
        this.setState({
            render: !this.state.render
        })
    }
    userClick = () => {
        this.setState({
            userRender: !this.state.userRender
        })
    }
    render() {
        return (
            <div>
                <span>User Dashboard</span>    
                <i className="fad fa-cut sissors"></i>
                <hr/>
                <Link to='/setupapp' ><PinkButton>Set Up Appointment</PinkButton></Link>
                <hr/>
                <PinkButton onClick={this.handleClick} >Add your dogs Info</PinkButton>
                <hr/>
                {this.state.render ? <UpdateUser /> : null}
                <PinkButton onClick={this.userClick} >Add Your Info</PinkButton>
                <hr/>
                {this.state.userRender ? <AddUserInfo /> : null}

                
            </div>
        )
    }
}
