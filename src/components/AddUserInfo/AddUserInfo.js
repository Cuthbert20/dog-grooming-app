import React, { Component } from 'react'
import axios from 'axios'
import './AddUserInfo.css'
import Swal from 'sweetalert2'
import { UserInfoInput, SubBtn } from '../../style.js'

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
    handleClick = () => {
        // console.log('hit',this.state)
        const {username, phone} = this.state
        axios.put(`/auth/userinfo`, {username, phone})
        .then(res => {
            // console.log(res.data[0].login_name)
            Swal.fire(`${res.data[0].login_name} has been updated`)
        })
    }
    render() {
        // console.log(this.state)
        return (
            <div className='update-container'>
                <span style={{fontWeight: 'bold'}}>Add Your Information</span> 
                <br/>
                <UserInfoInput onChange={e => this.handleChange(e, 'username')} placeholder='Your Name' type="text"/>
                <UserInfoInput onChange={e => this.handleChange(e, 'phone')} placeholder="Phone Number" type="text"/>
                <SubBtn onClick={() => this.handleClick()} >Submit</SubBtn>
            </div>
        )
    }
}
