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
        console.log('hit', res.data)
        this.props.setUser(res.data)
        // this.props.history.push('/dashboard') REMOVED BECAUSE
        // history and match come off of this.props it has access to those values because of our switch on our index.js
        // console.log(this.props, 'hit')
        if(res.data.admin_user === false){
            this.props.history.push('/dashboard')
        }
        else{
            this.props.history.push('/dashboard/admin')
        }
    }
    render(){
        console.log(this.props)
        const { login_name, password } = this.state
        return(
            <div>
                <div>
                    <HeaderOne>Log In</HeaderOne>
                </div>
                <input className='text-input' onChange={e => this.handleChange(e, 'login_name')} value={login_name} placeholder="login Name" type="text"/>
                <br/>
                <input className='text-input'  onChange={e => this.handleChange(e, 'password')} value={password} placeholder='password' type="password"/>
                <br/>
                <WhiteBtn onClick={this.login} >Click Me</WhiteBtn>
                {/* <br/> */}
                <Link to='/' ><WhiteBtn size='sm' variant="outline-info" >Back</WhiteBtn></Link>
            </div>
        )
    }
}
function mapStateToProps(reduxState){
    const {admin_user} = reduxState
    return{
        admin_user
    }
}

export default connect(mapStateToProps,{setUser})(Login)