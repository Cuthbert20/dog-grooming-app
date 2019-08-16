import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UpdateUser from '.././UpdateUser/UpdateUser'
import AddUserInfo from '.././AddUserInfo/AddUserInfo'

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
                User Dashboard
                <Link to='/setupapp' ><button>Set Up Appointment</button></Link>
                <button onClick={this.handleClick} >Update Your Info</button>
                {this.state.render ? <UpdateUser /> : null}
                <button onClick={this.userClick} >Add Your Info</button>
                {this.state.userRender ? <AddUserInfo /> : null}
                
            </div>
        )
    }
}
