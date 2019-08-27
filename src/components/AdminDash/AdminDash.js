import React, { Component } from 'react'
import Axios from 'axios';
import { WhiteBtn, BookingContainer, DogImg, AdminHeader, AdminSubHead } from '../../style'
import BookedUser from './BookedUser'
import { connect } from 'react-redux'
// import AdminMgs from './AdminMgs'

class AdminDash extends Component {
    state = {
        bookings: [],
        index: 0,
        user_id: null,
        displayDetails: false
    }
    componentDidMount(){
        this.getBookings()
        this.isAdmin()
    }
    componentDidUpdate(){
        this.isAdmin()
    }
    isAdmin = () => {
        if(!this.props.admin_user){
            this.props.history.push('/')
        }
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
    showMgs = () => {
        this.props.history.push('/dashboard/messages')
    }
    render() {
        const { bookings, displayDetails  } = this.state
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
                <AdminHeader>HEY BOSS</AdminHeader>
                <AdminSubHead>Here is your schedule</AdminSubHead>
                <BookingContainer>
                {displayDetails ? <BookedUser id={this.state.user_id} /> : null}
                    {allBookings[this.state.index]}
                </BookingContainer>
                
                <WhiteBtn onClick={this.increaseIndex} >Next</WhiteBtn>
                <WhiteBtn onClick={this.showMgs} >Messages</WhiteBtn>
            </div>
        )
    }
}
function mapStateToProps(reduxState){
    const { admin_user } = reduxState
    return{
        admin_user
    }
}

export default connect(mapStateToProps)(AdminDash)
