import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import UpdateUser from '.././UpdateUser/UpdateUser'
import AddUserInfo from '.././AddUserInfo/AddUserInfo'
import { UserDashHeader, UserDashTitle, PawContainer } from '../../style'
import './UserDash.css'
import Axios from 'axios'

export default class UserDash extends Component {
    state = {
        render: false,
        userRender: false,
        renderPaw: true,
        loginName: ""
    }
    componentDidMount() {
        this.getUser()
    }
    getUser = () => {
        Axios.get('/auth/session').then(res => {
            if(res.data.user){
                this.setState({
                    loginName: res.data.user.login_name
                })
            }
        })
    }
    handleClick = () => {
        // const { render } = this.state
        this.setState({
            render: !this.state.render,
            renderPaw: !this.state.renderPaw
        })
    }
    userClick = () => {
        this.setState({
            userRender: !this.state.userRender,
            renderPaw: !this.state.renderPaw
        })
    }
    historyClick = () => {
        this.props.history.push('/dashboard/history')
    }
    userDogClick = () => {
        this.props.history.push('/dashboard/userdog')
    }
    appClick = () => {
        this.props.history.push('/setupapp')
    }
    render() {
        // console.log(this.state.renderPaw)
        const { renderPaw, loginName } = this.state
        console.log(loginName)
        return (
            <div>
            <UserDashHeader>
                <div>
                <UserDashTitle style={{fontWeight: 'bold'}} >{loginName}</UserDashTitle>    
                <i className="fad fa-cut sissors"></i>
                </div>
                <button onClick={() => this.appClick()}  className='btn btn1' >Set Up Appointment</button>
                <hr/>
                <button className='btn btn2' onClick={this.handleClick} >Add your dogs Info</button>
                <hr/>
                
                <button className='btn btn1' onClick={this.userClick} >Add Your Info</button>
                <hr/>
                <button className='btn btn2' onClick={this.historyClick} >Appointment History</button>
                <hr/>
                <button className='btn btn1' onClick={() => this.userDogClick()} >Your Dogs</button>
                
                {/* <UserInfo /> */}
            </UserDashHeader>
                <div className='update-user-contain'>
                    {this.state.render ? <UpdateUser /> : null}
                    {this.state.userRender ? <AddUserInfo /> : null}
                </div>
                  {renderPaw ? 
                    <PawContainer>
                    <div className="card middle">
                        <div className="front" > 
                            <img className="go-away" src="http://localhost:4001/static/test-paw.png" alt=""/>
                        </div>
                        <div className="back" >
                            <div className="back-content middle">
                                <h2>Dog Grooming</h2>
                                <span>Follow Us On</span>
                                <div className='small' >
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-youtube"></i>
                                <i className="fab fa-twitter"></i>
                                </div>
                            </div>
                        </div>
                        </div>
                    </PawContainer>
                  : null
                }
            </div>
        )
    }
}
