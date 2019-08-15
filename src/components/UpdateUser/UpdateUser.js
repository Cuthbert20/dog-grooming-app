import React, { Component } from 'react'
import { connect } from 'react-redux'
import './UpdateUser.css'

class UpdateUser extends Component{
    state = {
        dogs: []
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <div>
                <ul>
                    
                    <li><input type="text"/></li>
                    <li><input type="text"/></li>
                    <li><input type="text"/></li>
                    <li><input type="text"/></li>
                    <button>Submit</button>
                </ul>
            </div>
        )
    }
}
function mapStateToProps(reduxState){
    return {
        reduxState
    }
}

export default connect(mapStateToProps,{})(UpdateUser)