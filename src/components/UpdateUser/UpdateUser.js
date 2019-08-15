import React, { Component } from 'react'
import { connect } from 'react-redux'
import './UpdateUser.css'
import axios from 'axios'

class UpdateUser extends Component{
    state = {
        dogs: [],
        dog_breed: ''
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
    render(){
        const { dogs, dog_breed } = this.state
        console.log('dog breed', dog_breed)
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
                    <li><input type="text"/></li>
                    <li><input type="text"/></li>
                    <li><input type="text"/></li>
                    <li><input type="text"/></li>
                    <button>Submit</button>
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