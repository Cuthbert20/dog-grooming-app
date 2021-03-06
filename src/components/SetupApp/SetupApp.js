import React, { Component } from "react";
import { connect } from "react-redux";
// import ServicesComp from '../ServicesComp/ServicesComp'
import { AppointmentContainer } from "../../style";
import axios from "axios";
import {
  ServicesContainer,
  ServicesHeader,
  ServiceTitle,
  ServicePrice,
  TimeSelect,
  BookingForm,
  WhiteBtn,
  DateSpan,
  DogName
} from "../../style";
import "./SetupApp.css";
import Swal from "sweetalert2";

const times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm"];

class SetupApp extends Component {
  state = {
    services: [],
    service_id: "",
    time: "",
    date: "",
    userDogs: [],
    dog_id: ""
  };
  componentDidMount() {
    this.getServices();
    this.getDogs();
  }
  getDogs = () => {
    axios.get("/dog/userdogs").then(res => {
      this.setState({
        userDogs: res.data
      });
    });
  };
  getServices = () => {
    axios.get("/dog/services").then(res => {
      this.setState({
        services: res.data
      });
    });
  };
  inputChange(e, key) {
    // console.log("e", e.target.value)
    this.setState({
      [key]: e.target.value
    });
  }
  handleClick = () => {
    const { date, time, service_id, dog_id } = this.state;
    // console.log(this.state)
    axios
      .post(`/dog/booking`, {
        book_date: date,
        book_time: time,
        service_id,
        dog_id
      })
      .then(() => {
        Swal.fire(`Appointment set for ${date} at ${time}`);
        this.props.history.push("/dashboard");
      });
  };
  backClick = () => {
    this.props.history.push("/dashboard");
  };
  render() {
    // console.log(this.state)
    const { services, date, userDogs } = this.state;
    const allServices = services.map(val => {
      return (
        <ServicesContainer key={val.service_id}>
          <ServicesHeader>
            <ServiceTitle>
              <div className="toggle">
                <label className="switch">
                  <input
                    onChange={e => this.inputChange(e, "service_id")}
                    value={val.service_id}
                    type="checkbox"
                  />
                  <span className="slider round"></span>
                </label>
                <h4>{val.service_name}</h4>
              </div>
            </ServiceTitle>
            <ServicePrice>{val.service_price}</ServicePrice>
          </ServicesHeader>
          {val.service_info}
        </ServicesContainer>
      );
    });
    return (
      <AppointmentContainer>
        <DogName>Select a Service</DogName>
        <div>
          {allServices}
          {/* <ServicesComp /> */}
        </div>
        <div>
          <BookingForm>
            <label>
              <DateSpan>Date:</DateSpan>
              <input
                className="text-input"
                onChange={e => this.inputChange(e, "date")}
                value={date}
                type="date"
              />
            </label>
            <TimeSelect onChange={e => this.inputChange(e, "time")}>
              <option value="">Select Time</option>
              {times.map(e => {
                return (
                  // console.log(e)
                  <option key={e} value={e}>
                    {e}
                  </option>
                );
              })}
            </TimeSelect>
            <TimeSelect onChange={e => this.inputChange(e, "dog_id")}>
              <option>SELECT YOUR DOG</option>
              {userDogs.map(val => {
                return (
                  <option key={val.dog_id} value={val.dog_id}>
                    {val.dog_name}
                  </option>
                );
              })}
            </TimeSelect>
            <WhiteBtn onClick={() => this.handleClick()}>Submit</WhiteBtn>
            <WhiteBtn onClick={() => this.backClick()}>Back</WhiteBtn>
          </BookingForm>
        </div>
      </AppointmentContainer>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    reduxState
  };
}

export default connect(
  mapStateToProps,
  {}
)(SetupApp);
