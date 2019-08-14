import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Main extends Component{
    render(){
        return(
            <div>
                Main Component
                <Link to='/login' ><button>Login</button></Link>
                <Link to='/setupapp' ><button>Set Up Appointment</button></Link>
            </div>
        )
    }
}