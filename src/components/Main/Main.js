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
                    {/* <h4 style={{color: "black"}} >Welcome</h4> */}
                <MainHeader>
                    {/* <LogoImg src="http://localhost:4001/static/hiclipart.com-id_dimfn.png" alt="logo"/> */}
                    <i className="fad fa-5x fa-cut fade-in"></i>
                    <Link to='/login' ><WhiteBtn>Login</WhiteBtn></Link>
                    <Link to='/setupapp' ><WhiteBtn>Set Up Appointment</WhiteBtn></Link>
                    <Link to='/register' ><WhiteBtn>Register</WhiteBtn></Link>
                    <i className="fad fa-5x fa-cut fade-in"></i>
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