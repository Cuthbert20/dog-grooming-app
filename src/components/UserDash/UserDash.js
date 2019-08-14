import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserDash extends Component {
    render() {
        return (
            <div>
                User Dashboard
                <Link to='/setupapp' ><button>Set Up Appointment</button></Link>
            </div>
        )
    }
}
