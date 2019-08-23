import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UpdateUser from '.././UpdateUser/UpdateUser'
import AddUserInfo from '.././AddUserInfo/AddUserInfo'
import { UserDashHeader, UserDashTitle } from '../../style'
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
    userDogClick = () => {
        this.props.history.push('/dashboard/userdog')
    }
    render() {
        return (
            <div>
            <UserDashHeader>
                <div>
                <UserDashTitle style={{fontWeight: 'bold'}} >User Dashboard</UserDashTitle>    
                <i className="fad fa-cut sissors"></i>
                </div>
                <Link to='/setupapp' ><button className='btn btn1' >Set Up Appointment</button></Link>
                <hr/>
                <button className='btn btn2' onClick={this.handleClick} >Add your dogs Info</button>
                <hr/>
                
                <button className='btn btn1' onClick={this.userClick} >Add Your Info</button>
                <hr/>
                <button className='btn btn2' onClick={this.historyClick} >Appointment History</button>
                <hr/>
                <button className='btn btn1' onClick={this.userDogClick} >Your Dogs</button>
                
                {/* <UserInfo /> */}
            </UserDashHeader>
                <div className='update-user-contain'>
                    {this.state.render ? <UpdateUser /> : null}
                    {this.state.userRender ? <AddUserInfo /> : null}
                </div>
            </div>
        )
    }
}
