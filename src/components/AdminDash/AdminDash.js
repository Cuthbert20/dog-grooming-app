import React, { Component } from 'react'
import Axios from 'axios';
import { WhiteBtn, BookingContainer, DogImg } from '../../style'
import BookedUser from './BookedUser'

export default class AdminDash extends Component {
    state = {
        bookings: [],
        index: 0,
        user_id: null,
        displayDetails: false
    }
    componentDidMount(){
        this.getBookings()
    }
    getBookings = () => {
        Axios.get('/auth/admins')
        .then(res => {
            this.setState({
                bookings: res.data
            })
        })
    }
    increaseIndex = () => {
        this.setState({
            index: this.state.index +1,
            displayDetails: false
        })
    }
    toggleDetails = (id) => {
        this.setState({
            displayDetails: !this.state.displayDetails,
            user_id: id
        })
    }
    handleClick = () => {
        //should button set displayUser: true onClick when mapping over booking so I can give it the val.user_id value?
    }
    render() {
        const { bookings, index, displayDetails  } = this.state
        console.log(this.state)
        // const service = bookings[this.state.index].service_name
        const allBookings = bookings.map(val => {
            return(
                    <main key={val.book_id}  >
                        <i className="far fa-calendar-week"></i><span>--</span>
                        {`Appointment at ${val.book_time} on ${val.to_char} services scheduled ${val.service_name}`}
                        <p>{`For ${val.dog_name}, whos breed is ${val.dog_breed}`}</p>
                        <DogImg src={val.dog_img} alt=""/>
                        <WhiteBtn onClick={() => this.toggleDetails(val.user_id)} >Customer Details</WhiteBtn>
                    </main>
            )
        })
        return (
            <div>
                <h1>HEY BOSS</h1>
                <h3>Here is your schedule</h3>
                <BookingContainer>
                {displayDetails ? <BookedUser id={this.state.user_id} /> : null}
                    {allBookings[this.state.index]}
                </BookingContainer>
                
                <WhiteBtn onClick={this.increaseIndex} >Next</WhiteBtn>
            </div>
        )
    }
}
