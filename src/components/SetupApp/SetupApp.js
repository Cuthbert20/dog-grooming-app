import React, { Component } from 'react'
import {connect} from 'react-redux'

class SetupApp extends Component {
    render() {
        console.log("props on setup appointment",this.props)
        return (
            <div>
                Setup Appointment
                <div>
                    
                </div>
            </div>
        )
    }
}
function mapStateToProps(reduxState){
    return {
        reduxState
    }
}

export default connect(mapStateToProps,{})(SetupApp)
