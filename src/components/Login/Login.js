import React, { Component } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';

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
            this.setState({
                //should I reset state of login_name to ''
                login_name: res.data.login_name,
                password: ''
            })
            console.log(this.state)
        })
    }
    render(){
        const { login_name, password } = this.state
        return(
            <div>
                <input onChange={e => this.handleChange(e, 'login_name')} value={login_name} placeholder="login Name" type="text"/>
                <input onChange={e => this.handleChange(e, 'password')} value={password} placeholder='password' type="password"/>
                <Button size='md' variant="outline-info" onClick={this.login} >Click Me</Button>
            </div>
        )
    }
}