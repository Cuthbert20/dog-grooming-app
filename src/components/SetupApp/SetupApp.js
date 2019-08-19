import React, { Component } from 'react'
import {connect} from 'react-redux'
import ServicesComp from '../ServicesComp/ServicesComp'
import { AppointmentContainer } from '../../style'
import axios from 'axios'
import { ServicesContainer, ServicesHeader, ServiceTitle,
    ServicePrice } from '../../style'
    import './SetupApp.css'

class SetupApp extends Component {
    state = {
        services: [],
        isToggle: true
    }
    componentDidMount(){
        axios.get('/dog/services').then(res => {
            this.setState({
                services: res.data
            })
        })
    }
    handleChange = () => { 
        console.log(this.state.isToggle)
        const { isToggle } = this.state
        if(!isToggle){
            this.setState({
                isToggle: true
            })
        }
        else {
            this.setState({
                isToggle: false
            })
        }
    }
    render() {
        // console.log("props on setup appointment",this.props)
        const { services } = this.state;
        const allServices = services.map(val => {
            return (
                <ServicesContainer key={val.service_id} >
          <ServicesHeader>
            <ServiceTitle>
                <div className="toggle">
                <label className='switch'>
                    <input onClick={this.handleChange} type="checkbox"/>
                    <span className='slider round' ></span>
                </label>
                    <h4>{val.service_name}</h4>
                </div>
            </ServiceTitle>
            <ServicePrice>{val.service_price}</ServicePrice>
          </ServicesHeader>
          {val.service_info}
        </ServicesContainer>
            )
        })
        return (
            <AppointmentContainer>
                <h4 style={{color: "black"}}>
                    Select a Service
                </h4>
                <div>
                    {allServices}
                    {/* <ServicesComp /> */}
                </div>
            </AppointmentContainer>
        )
    }
}
function mapStateToProps(reduxState){
    return {
        reduxState
    }
}

export default connect(mapStateToProps,{})(SetupApp)
