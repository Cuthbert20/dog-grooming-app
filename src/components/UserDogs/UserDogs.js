import React, { Component } from 'react'
import axios from 'axios'
// import Dropzone from 'react-dropzone'
import { DogImg, DogImgContainer } from '../../style'

// const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_COUDINARY_UPLOAD_PRESET; //how to grab .env info on the front end
// const REACT_APP_CLOUDINARY_CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
// const REACT_APP_CLOUDINARY_API_KEY = process.env.REACT_APP_CLOUDINARY_API_KEY;

class UserDogs extends Component {
    state = {
        userDogs: []
    }
    componentDidMount(){
        this.getDogs()
    }
    getDogs = () => {
        axios.get('/dog/userdogs').then(res => {
            this.setState({
                userDogs: res.data
            })
        })
    }
    handleClick = () => {
        this.props.history.push('/dashboard')
    }
    render(){
        const { userDogs } = this.state
        console.log(userDogs)
        const allDogs = userDogs.map(val => {
            return (
                <div key={val.dog_id} >
                    <span key={val.dog_id} >
                        {/* <i className="fas fa-paw"></i> */}
                        {/* <li>{val.dog_name}</li> */}
                        {val.dog_img === null ? null : <h4>{val.dog_name}</h4> }
                        {val.dog_img === null ? null : <DogImg src={val.dog_img} />}
                        {val.dog_img === null ? null : <h6>{val.dog_breed}</h6>}
                    </span>
                </div>
            )
        })
        return(
            <div>
                List of Users Dogs With Photos Displayed
                <DogImgContainer>
                {allDogs}
                </DogImgContainer>
                <hr/>
                <button onClick={this.handleClick} >Back</button>
            </div>
        )
    }
}

export default UserDogs