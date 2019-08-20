import React, { Component } from 'react'
import axios from "axios"
import { UserInfoMain } from '../../style'


export default class UserInfo extends Component{
    state = {
        userDogs: [],
        dog: ''

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
    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }
    render(){
        const { userDogs, dog } = this.state
        console.log(dog)
        return(
            <UserInfoMain>
                User Info Component
                <div>
                    <select value={dog} onChange={e => this.handleChange(e, 'dog')} >
                        <option value="">See Your Dogs</option>
                        {userDogs.map(val => {
                            return (
                                <option key={val.dog_id} value={val.dog_name} >
                                    {`${val.dog_name}, BREED: ${val.dog_breed}`}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div>

                </div>
            </UserInfoMain>
        )
    }
}
