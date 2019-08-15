import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UpdateUser from '.././UpdateUser/UpdateUser'

export default class UserDash extends Component {
    state = {
        render: false
    }
    handleClick = () => {
        const { render } = this.state
        this.setState({
            render: !this.state.render
        })
    }
    render() {
        return (
            <div>
                User Dashboard
                <Link to='/setupapp' ><button>Set Up Appointment</button></Link>
                <button onClick={this.handleClick} >Update Your Info</button>
                {this.state.render ? <UpdateUser /> : null}
                
            </div>
        )
    }
}
