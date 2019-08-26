import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux' 
import {setUser} from '../../ducks/reducer'
import { TextInput, RegMain, HeadingMain } from '../../style'
import './Register.css'

class Register extends Component{
    state = {
        loginInput: '',
        emailInput: '',
        passwordInput: ''
    }
    handleChange(e, key){
        this.setState({
            [key]: e.target.value
        })
        // console.log(this.state)
    }
    registerUser = async () => {
        //destructuring and assigning values = yes
        var { loginInput: login_name, emailInput: email, passwordInput: password } = this.state
        let res = await axios.post('/auth/register', {email, password, login_name})
        console.log(res.data)
        // var { login_name, email } = res.data
        this.props.setUser(res.data)
        this.props.history.push('/dashboard')
    }
    
    render(){
        const { loginInput, emailInput, passwordInput } = this.state
        return(
            <RegMain>
                <HeadingMain>Register Here</HeadingMain>
                <TextInput onChange={e => this.handleChange(e, 'loginInput')} value={loginInput} placeholder='login name' type="text"/>
                <TextInput onChange={e => this.handleChange(e, 'emailInput')} value={emailInput} placeholder='email' type="email"/>
                <TextInput onChange={e => this.handleChange(e, 'passwordInput')} value={passwordInput} placeholder='password' type="password"/>
                <a className='submit-btn' onClick={this.registerUser} ><i class="fad fa-user-plus"></i></a>
            </RegMain>
        )
    }
}
// function mapStateToProps(reduxState){
//     const { user_id } = reduxState
//     return{
//         user_id
//     }
// }

export default connect(null,{setUser})(Register)