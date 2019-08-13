import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component{
    state={
        login_name: '',
        password: ''
    }

    handleChange(e, key){
        this.setState({
            [key]: e.target.value
        })
    }
    login = () => {
        const { login_name, password } =  this.state
        axios.post('/auth/login', {login_name, password})
        .then(res => {
            console.log(res.data)
        })
    }
    render(){
        const { login_name, password } = this.state
        return(
            <div>
                <input onChange={e => this.handleChange(e, 'login_name')} value={login_name} placeholder="login Name" type="text"/>
                <input onChange={e => this.handleChange(e, 'password')} value={password} placeholder='password' type="text"/>
                <button onClick={this.login} >Click Me</button>
            </div>
        )
    }
}