import React, { Component } from 'react'
import { connect } from 'react-redux'
import './UpdateUser.css'
import axios from 'axios'

class UpdateUser extends Component{
    state = {
        dogs: [],
        dog_breed: '',
        dog_name: '',
        username: '',
        phone: ''
    }
    componentDidMount(){
        //getting the dog api
        axios.get(`https://api.thedogapi.com/v1/breeds`, {
            header: {
               'x-api-key': process.env.REACT_APP_BREED_API_KEY
            }
        }).then(res => {
            // console.log(res.data)
            this.setState({dogs: res.data})
        })
    }
    handleChange = dog => {
        this.setState({dog_breed: dog.target.value})
        // console.log('dog', dog)
    }
    inputChange(e, key){
        this.setState({
            [key]: e.target.value
        })
    }
    render(){
        const { dogs, dog_breed, dog_name, username, phone } = this.state
        // console.log('dog breed', dog_breed)
        console.log('state', this.state)
        return(
            <div>
                <ul>
                    {/* .fitler first then map because  */}
                    <select value={dog_breed} onChange={e => this.handleChange(e)} name="" id="">
                        <option value="">Select Dog Breed</option>
                    {dogs.map((elm) => {
                        return (
                            <option key={elm.id} value={elm.name}>{elm.name}</option> 
                                )

                    })}
                    </select>
                    <li><input onChange={e => this.inputChange(e, "dog_name")} value={dog_name} placeholder='Dog Name' type="text"/></li>
                    <li><input onChange={e => this.inputChange(e, "username")} value={username} placeholder='Ower Name' type="text"/></li>
                    <li><input onChange={e => this.inputChange(e, "phone")} value={phone} placeholder='Phone Number' type="text"/></li>
                    <button>Submit</button>
                </ul>
            </div>
        )
    }
}
function mapStateToProps(reduxState){
    // const { dog_breed, phone, dog_name, username } = reduxState
    return {
        // dog_breed,
        // phone,
        // dog_name,
        // username
    }
}

export default connect(mapStateToProps,{})(UpdateUser)