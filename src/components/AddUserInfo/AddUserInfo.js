import React, { Component } from 'react'

export default class AddUserInfo extends Component {
    state = {
        username: '',
        phone: ''
    }
    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                Add Your Information
                <br/>
                <input onChange={e => this.handleChange(e, 'username')} placeholder='Your Name' type="text"/>
                <input onChange={e => this.handleChange(e, 'phone')} placeholder="Phone Number" type="text"/>
                <button>Submit</button>
            </div>
        )
    }
}
