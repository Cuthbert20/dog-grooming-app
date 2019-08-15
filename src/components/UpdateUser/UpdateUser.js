import React, { Component } from 'react'
import { connect } from 'react-redux'
import './UpdateUser.css'
import axios from 'axios'

class UpdateUser extends Component{
    state = {
        dogs: []
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
    render(){
        const { dogs } = this.state
        console.log('dog', dogs)
        return(
            <div>
                <ul>
                    {/* .fitler  */}
                    {dogs.map((elm) => {
                        return <li key={elm.id} >{elm.name}</li>
                    })}
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