import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ServicesComp from '../ServicesComp/ServicesComp'
import { MainDisplay, MainContainer, MainHeader, PinkButton } from '../../style'

export default class Main extends Component{
    onScrolling = (e) => {
        console.log('scrolling', e)
    }
    // onScroll={(e) => this.onScrolling(e)} style={{outline: "5px solid red"}}
    render(){
        return(
            <div >
            <MainDisplay >
                <MainContainer>
                <div>
                    {/* <h4 style={{color: "black"}} >Welcome</h4> */}
                    {/* <img src="http://localhost:4001/static/doglogo.jpg" alt="logo"/> */}
                <MainHeader>
               <Link to='/login' ><PinkButton>Login</PinkButton></Link>
                <Link to='/setupapp' ><PinkButton>Set Up Appointment</PinkButton></Link>
                </MainHeader>
                </div> 
                <ServicesComp />
                </MainContainer>
            </MainDisplay>
            </div>
        )
    }
}