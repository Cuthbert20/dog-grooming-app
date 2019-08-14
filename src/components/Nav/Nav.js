import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {userLogout} from '../../ducks/reducer'
//when Component is not in your routes.js to give it access to the routes you need to import withRouter
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class Nav extends Component{
    
    logout = async () => {
        let res = await axios.delete(`/auth/logout`)
        this.props.userLogout()
        this.props.history.PushManager('/')
    }

    render(){
        console.log("props on nav ",this.props)
        //withRouter is what is giving me access to match, location, and history from this.props
        // const { match, location, history } = this.props;
        return(
            <div>
                Nav
                {this.props.login_name ? <> (<h4>Welcome, {this.props.login_name}</h4>
                <button onClick={this.logout} >Logout</button>) </> : null}
                
            </div>
        )
    }
}
function mapStateToProps(reduxState){
    //destructuring username off of reduxState
    const {login_name} = reduxState
    return {
        login_name
    }
}

export default connect(mapStateToProps,{userLogout})(withRouter(Nav))