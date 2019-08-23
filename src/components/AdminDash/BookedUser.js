import React, { Component } from 'react'
import Axios from 'axios';

export default class BookedUser extends Component {
    state = {
        user: []
    }
    componentDidMount() {
        
    }
    userInfo = id => {
        Axios.get(`/auth/booked/${id}`)
        .then(res => {
            this.setState({
                user: res.data
            })
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
