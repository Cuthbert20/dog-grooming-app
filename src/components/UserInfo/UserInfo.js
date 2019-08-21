import React, { Component } from 'react'
import axios from "axios"
import { UserInfoMain, UserHistory, UserHistoryContainer } from '../../style'


export default class UserInfo extends Component{
    state = {
        userDogs: [],
        dog: '',
        services: []

    }
    componentDidMount(){
        this.getDogs()
        this.getServices()
    }
    getDogs = () => {
        axios.get('/dog/userdogs').then(res => {
            this.setState({
                userDogs: res.data
            })
        })
    }
    getServices = () => {
            axios.get('/dog/serviced')
            .then(res => {
                // console.log(res.data)
                this.setState({
                    services: res.data
                })
            })
    }
    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }
    backClick = () => {
        this.props.history.push('/dashboard')
    }
    render(){
        const { userDogs, dog, services } = this.state
        // console.log(services)
        const allServices = services.map(elm => {
            // console.log(elm)
            return (
                <UserHistory key={elm.book_id} >
                <i style={{padding: '10px'}} className="fad fa-bone"></i>
                 <li>{`${elm.dog_name} at ${elm.book_time} on ${elm.book_date} service ${elm.service_name} total ${elm.service_price}`}</li>
                
                </UserHistory>
            )
        })
        return(
            <UserInfoMain>
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
                    <button onClick={this.backClick} >Back to Dashboard</button>
                    <UserHistoryContainer>
                    <ul  style={{alignItems: 'flex-start'}}>
                        {allServices}
                    </ul>
                </UserHistoryContainer>
                </div>
                
                
            </UserInfoMain>
        )
    }
}
