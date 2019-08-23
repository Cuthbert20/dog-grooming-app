import React, { Component } from 'react'
import Axios from 'axios';

export default class BookedUser extends Component {
    state = {
        user: []
    }
    componentDidMount() {
        this.userInfo(this.props.id)
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
        //we returned an object from our controller so that we don't have to map over the data see ctrl method bookedUser
        const { user } = this.state
        console.log('user', user.email)
        // const userInfo = user.map(val => {
        //     return (
        //         <div>
        //             <h3>{val.username}</h3>
        //             <h5>{val.phone}</h5>
        //             <h6>{val.email}</h6>
        //         </div>
        //     )
        // })
        return (
            <div>
                <h1>Customer Details</h1>
                <h3>{user.username}</h3>
                <h5>{user.phone}</h5>
                <h6>{user.email}</h6>
            </div>
        )
    }
}
