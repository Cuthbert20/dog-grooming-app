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
    historyClick = () => {
        this.props.history.push('/dashboard/history')
    }
    render() {
        return (
            <div>
                <span style={{fontWeight: 'bold'}} >User Dashboard</span>    
                <i className="fad fa-cut sissors"></i>
                <hr/>
                <Link to='/setupapp' ><PinkButton>Set Up Appointment</PinkButton></Link>
                <hr/>
                <PinkButton onClick={this.handleClick} >Add your dogs Info</PinkButton>
                <hr/>
                {this.state.render ? <UpdateUser /> : null}
                <PinkButton onClick={this.userClick} >Add Your Info</PinkButton>
                <hr/>
                <PinkButton onClick={this.historyClick} >Appointment History</PinkButton>
                <hr/>
                <PinkButton>Your Dogs</PinkButton>
                {this.state.userRender ? <AddUserInfo /> : null}
                {/* <UserInfo /> */}
            </div>
        )
    }
}
