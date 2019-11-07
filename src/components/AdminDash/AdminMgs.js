import React, { Component } from "react";
import axios from "axios";
import { WhiteBtn, UsernameMgs, MsgBodyHfive } from "../../style";

export default class AdminMgs extends Component {
  state = {
    userMgs: []
  };
  componentDidMount() {
    this.getMessages();
  }
  getMessages = () => {
    axios.get("/auth/mgs").then(res => {
      this.setState({
        userMgs: res.data
      });
    });
  };
  backClick = () => {
    this.props.history.push("/dashboard/admin");
  };
  render() {
    const { userMgs } = this.state;
    const allMgs = userMgs.map(val => {
      return (
        <div key={val.contact_id}>
          <UsernameMgs>{val.username}</UsernameMgs>
          <MsgBodyHfive>{val.message}</MsgBodyHfive>
          <br />
        </div>
      );
    });
    return (
      <div>
        {allMgs}
        <WhiteBtn onClick={() => this.backClick()}>Back</WhiteBtn>
      </div>
    );
  }
}
