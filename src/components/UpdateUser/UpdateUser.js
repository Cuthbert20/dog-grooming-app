import React, { Component } from "react";
import { connect } from "react-redux";
import "./UpdateUser.css";
import axios from "axios";
import {AddDogContainer, DogUpdateList, SelectDogDrop  } from '../../style'

//this COMPONENT will be for adding a dog to the data base
class UpdateUser extends Component {
  state = {
    dogs: [],
    dog_breed: "",
    dog_name: ""
    // username: '',
    // phone: ''
  };
  componentDidMount() {
    //getting the dog api
    axios
      .get(`https://api.thedogapi.com/v1/breeds`, {
        header: {
          "x-api-key": process.env.REACT_APP_BREED_API_KEY
        }
      })
      .then(res => {
        // console.log(res.data)
        this.setState({ dogs: res.data });
      });
  }
  handleChange = dog => {
    this.setState({ dog_breed: dog.target.value });
    // console.log('dog', dog)
  };
  inputChange(e, key) {
    this.setState({
      [key]: e.target.value
    });
  }
  buttonClick = () => {
    const { dog_breed, dog_name } = this.state;
    axios.post(`/auth/adddog`, { dog_breed, dog_name }).then(() => {
      alert(`your doggy has been added`);
    });
  };
  // buttonChange(body){
  //     axios.put(`/auth/update`,body)
  // }
  render() {
    // console.log(this.props)
    const { dogs, dog_breed, dog_name } = this.state;
    // console.log('dog breed', dog_breed)
    // console.log('state', this.state)
    return (
      <div>
        <DogUpdateList>
          <SelectDogDrop
            value={dog_breed}
            onChange={e => this.handleChange(e)}
            name=""
            id=""
          >
            <option value="">Select Dog Breed</option>
            {dogs.map(elm => {
              return (
                <option key={elm.id} value={elm.name}>
                  {elm.name}
                </option>
              );
            })}
          </SelectDogDrop>

            <AddDogContainer>
          <li>
          <i class="fad fa-dog "></i>
            <input
              className='dog-input'
              onChange={e => this.inputChange(e, "dog_name")}
              value={dog_name}
              placeholder="Enter Dog Name"
              type="text"
            />
            <span onClick={() => this.buttonClick()} ><i class="fad fa-play fa-arrow-right"></i></span>
          </li>
          </AddDogContainer>
          {/* <li><input onChange={e => this.inputChange(e, "username")} value={username} placeholder='Ower Name' type="text"/></li>
                    <li><input onChange={e => this.inputChange(e, "phone")} value={phone} placeholder='Phone Number' type="text"/></li> */}
          {/* <button onClick={() => this.buttonChange()}>Submit</button> */}
        </DogUpdateList>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  const { dog_ids } = reduxState;
  return {
    dog_ids
  };
}

export default connect(
  mapStateToProps,
  {}
)(UpdateUser);
