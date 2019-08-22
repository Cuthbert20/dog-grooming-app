import React, { Component } from 'react'
import axios from 'axios'
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUser } from '../../ducks/reducer'
import { WhiteBtn, HeaderOne } from '../../style'
import './Login.css'

class Login extends Component{
    state={
        login_name: '',
        password: ''
    }

    handleChange(e, key){
        this.setState({
            [key]: e.target.value
        })
    }
    login = async () => {
        var { login_name, password } =  this.state
        let res = await axios.post('/auth/login', {login_name, password})
        // var { login_name, email } = res.data
        // console.log('hit', res.data)
        this.props.setUser(res.data)
        this.props.history.push('/dashboard')
        // history and match come off of this.props it has access to those values because of our switch on our index.js
        // console.log(this.props, 'hit')
        // .then(res => {
        //     this.setState({
        //         should I reset state of login_name to ''
        //         login_name: res.data.login_name,
        //         password: ''
        //     })
        //     console.log(this.state)
        // })
    }
    render(){
        const { login_name, password } = this.state
        return(
            <div>
                <div>
                    <HeaderOne>Log In</HeaderOne>
                </div>
                <input class='text-input' onChange={e => this.handleChange(e, 'login_name')} value={login_name} placeholder="login Name" type="text"/>
                <br/>
                <input class='text-input'  onChange={e => this.handleChange(e, 'password')} value={password} placeholder='password' type="password"/>
                <br/>
                <WhiteBtn onClick={this.login} >Click Me</WhiteBtn>
                {/* <br/> */}
                <Link to='/' ><WhiteBtn size='sm' variant="outline-info" >Back</WhiteBtn></Link>
            </div>
        )
    }
}

export default connect(null,{setUser})(Login)