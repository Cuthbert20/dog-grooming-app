import React, { Component } from "react";
import { connect } from "react-redux";
import "./UpdateUser.css";
import axios from "axios";
import {AddDogContainer, DogUpdateList, SelectDogDrop, DogImg  } from '../../style'
import Dropzone from 'react-dropzone'

const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_COUDINARY_UPLOAD_PRESET; //how to grab .env info on the front end
const REACT_APP_CLOUDINARY_CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const REACT_APP_CLOUDINARY_API_KEY = process.env.REACT_APP_CLOUDINARY_API_KEY;

//this COMPONENT will be for adding a dog to the data base
class UpdateUser extends Component {
  state = {
    dogs: [],
    dog_breed: "",
    dog_name: "",
    dog_img: '',
    uploadedFile: null,
    uploadedFileCloudinaryUrl: '',
    images: []
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
  onImageDrop(files){ //handles when files are chosen
    this.setState({
      uploadedFile: files
    })
    console.log(this.state)
    this.handleImageUpload(files);
  }
  handleImageUpload = async file => {
      file.map(image => {
      //our formdata
      const formData = new FormData();
      formData.append("file", image);
      formData.append("tags", "{TAGS}"); // Add tags for the images - {Array}
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); // Replace the preset name with your own
          formData.append("api_key", REACT_APP_CLOUDINARY_API_KEY); // Replace API key with your own Cloudinary API key
          formData.append("timestamp", (Date.now() / 1000) | 0);
        console.log(formData)
          return axios.post(`https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
          //formData is the body of the axios call
          formData,
          { headers: { "X-Requested-With": "XMLHttpRequest" } }
          )
          .then(response => {
            this.setState({
              images: [...this.state.images, response.data.url],
              dog_img: response.data.url
            })
          })
    })
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
    const { dog_breed, dog_name, dog_img} = this.state;
    axios.post(`/auth/adddog`, { dog_breed, dog_name, dog_img }).then(() => {
      alert(`your doggy has been added`);
    });
  };
  // buttonChange(body){
  //     axios.put(`/auth/update`,body)
  // }
  render() {
    // console.log(this.props)
    const { dogs, dog_breed, dog_name, images } = this.state;
    let userImages = images.map(image => {
      return (
        <div key={image} >
          <figure>
              <DogImg src={image} alt=""/>
          </figure>
          <p>{image}</p>
        </div>
      )
    })
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
          <i className="fad fa-dog "></i>
            <input
              className='dog-input'
              onChange={e => this.inputChange(e, "dog_name")}
              value={dog_name}
              placeholder="Enter Dog Name"
              type="text"
            />
            <span onClick={() => this.buttonClick()} ><i className="fad fa-play fa-arrow-right"></i></span>
          </li>
          </AddDogContainer>
          <br/>
          <input type="text"/>
          <Dropzone
            style={{ border: "1px solid black" }}
            multiple={true} //allows multiple images to be uploaded
            accept="image/*" //allows any image type. You can be more explicit to limit only certain file types, e.g. accept="image/jpg,image/png"
            onDrop={this.onImageDrop.bind(this)} //method fired when image is uploaded
          >
            {({ getRootProps, getInputProps }) => { //Dropzone code I really don't understand
              return (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {
                    <p>
                      Click to select files to upload.
                    </p>
                  }
                </div>
              );
            }}
          </Dropzone>
          {/* <li><input onChange={e => this.inputChange(e, "username")} value={username} placeholder='Ower Name' type="text"/></li>
                    <li><input onChange={e => this.inputChange(e, "phone")} value={phone} placeholder='Phone Number' type="text"/></li> */}
          {/* <button onClick={() => this.buttonChange()}>Submit</button> */}
          {userImages}
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
