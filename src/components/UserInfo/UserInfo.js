import React, { Component } from 'react'
import axios from "axios"


export default class UserInfo extends Component{
    state = {
        userDogs: []
    }
    componentDidMount(){
        this.getDogs()
    }
    getDogs = () => {
        axios.get('dog/userdogs').then(res => {
            this.setState({
                userDogs: res.data
            })
        })
    }
    render(){
        const { userDogs } = this.state
        const allUserDogs = userDogs.map(val => {
            return(
                <div key={val.dog_id} >
                    <p><span>{val.dog_name}</span> <span>{val.dog_breed}</span> </p>
                </div>
            )
        })
        return(
            <div>
                User Info Component
                <div>
                    {allUserDogs}
                </div>
            </div>
        )
    }
}
