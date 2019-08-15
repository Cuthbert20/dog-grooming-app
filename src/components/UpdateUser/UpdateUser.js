import React, { Component } from 'react'
import { connect } from 'react-redux'
import './UpdateUser.css'

class UpdateUser extends Component{
    state = {
        render: false
    }
    handleClick = () => {
        const { render } = this.state
        if(render){
            this.setState({
                render: false
            })
        }
        else{
            this.setState({
                render: true
            })
        }
        
    }
    render(){
        return(
            <div>
                <ul>
                    <li><button onClick={this.handleClick} >Click to Update</button></li>
                    <li><input type="text"/></li>
                    <li><input type="text"/></li>
                    <li><input type="text"/></li>
                    <li><input type="text"/></li>
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