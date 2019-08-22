import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import {
  ServicesContainer,
  LandingContainer,
  ServicesHeader,
  ServiceTitle,
  ServicePrice
} from "../../style";

class ServicesComp extends Component {
  state = {
    services: []
  };
  componentDidMount() {
    Axios.get("/dog/services").then(res => {
      console.log(res.data)
      this.setState({
        services: res.data
      });
    });
  }
  render() {
    // console.log(this.state.services)
    const { services } = this.state;
    const allServices = services.map(val => {
      // console.log("val", val);
      return (
        <ServicesContainer key={val.service_id}>
          <ServicesHeader>
            <ServiceTitle>{val.service_name}</ServiceTitle>
            <ServicePrice>{val.service_price}</ServicePrice>
          </ServicesHeader>
          {val.service_info}
        </ServicesContainer>
      );
    });
    return (
      <LandingContainer>
        {allServices}
      </LandingContainer>
    );
  }
}
// function mapStateToProps(reduxState){
//     const { services } = reduxState
//     return{
//         services
//     }
// }

export default connect(
  null,
  {}
)(ServicesComp);
