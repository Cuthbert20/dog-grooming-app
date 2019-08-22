import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ServicesComp from '../ServicesComp/ServicesComp'
import { MainDisplay, MainContainer, MainHeader, PinkButton, LogoImg } from '../../style'
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
                    {/* <h4 style={{color: "black"}} >Welcome</h4> */}
                <MainHeader>
                    {/* <LogoImg src="http://localhost:4001/static/hiclipart.com-id_dimfn.png" alt="logo"/> */}
                    <i class="fad fa-5x fa-cut fade-in"></i>
                    <Link to='/login' ><PinkButton>Login</PinkButton></Link>
                    <Link to='/setupapp' ><PinkButton>Set Up Appointment</PinkButton></Link>
                    <Link to='/register' ><PinkButton>Register</PinkButton></Link>
                    <i class="fad fa-5x fa-cut fade-in"></i>
                {/* <LogoImg src="http://localhost:4001/static/hiclipart.com-id_dimfn.png" alt="logo"/> */}
                </MainHeader>
                </div> 
                <ServicesComp />
                </MainContainer>
            </MainDisplay>
            </div>
        )
    }
}