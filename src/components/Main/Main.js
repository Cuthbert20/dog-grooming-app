import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ServicesComp from '../ServicesComp/ServicesComp'
import { MainDisplay, MainContainer, MainHeader, WhiteBtn } from '../../style'
import './Main.css'

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
                <MainHeader>
                    <i className="fad fa-4x fa-cut fade-in set-size"></i>
                    <Link to='/login' ><WhiteBtn>Login</WhiteBtn></Link>
                    {/* <Link to='/setupapp' ><WhiteBtn>Set Up Appointment</WhiteBtn></Link> */}
                    <Link to='/register' ><WhiteBtn>Register</WhiteBtn></Link>
                    <i className="fad fa-4x fa-cut fa-rotate-180 fade-in set-size"></i>
                </MainHeader>
                </div> 
                <ServicesComp />
                </MainContainer>
            </MainDisplay>
            </div>
        )
    }
}