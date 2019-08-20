import styled from 'styled-components'

export const ServicesContainer = styled.section `
    /* background-color: #1a1a1a; */
    background-color: none;
    color: #f2f2f2;
    margin: 10px 0;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    padding: 0 10px;
    /* border: 1px pink solid; */
    
    :hover {
        background-color: rgba(10,20,50,0.5);
    }
    `;
export const LandingContainer = styled.section `
    /* background-color: #1a1a1a; */
    background-color: none;
    display: flex;
    flex-direction: column;
    /* border: 1px orange solid; */
    color: white;
    padding: 0 10px;
    border-radius: 5px;
    /* start this styling at 650px */
    @media (min-width: 650px) {
        width: 800px;
        /* centered main with margin: auto */
        margin: auto;
    }

`;

export const ServicesHeader = styled.header `
    display: flex;
    /* border: 1px lightblue solid; */
    justify-content: space-between;

`;

export const ServiceTitle = styled.h4 `
/* border: 1px lightsalmon solid; */
    
`;

export const ServicePrice = styled.p `
/* border: 1px pink solid; */

`;
// Main Component Styles

export const MainDiv = styled.div `

`;

export const MainDisplay = styled.main `
    display: flex;
    justify-content: space-around;
    
`;

export const MainContainer = styled.section `
    margin: 20px 0;
    /* border: 2px yellow solid; */
`;

export const MainHeader = styled.header `
    /* border: 3px pink dotted; */
    display: flex;
    justify-content: space-around;
    
`;

export const LogoDiv = styled.div `
    display: flex;

`;
//SetupApp Component

export const AppointmentContainer = styled.main `
    border: 1px lightskyblue solid;
`;

// general Style Components

export const PinkButton = styled.button `
    color: white;
    background-color: transparent;
    padding: 20px;
    border: 4px solid #494949;
    border-radius: 5px;
    :hover {
        color: #fff;
        background-color: #f6b93b;
        border-color: #f6b93b;
        transition: all 0.2s ease 0s;
        
    }
    :focus {
        outline: none;
    }
`;

export const LogoImg = styled.img `
    border-radius: 5%;
    max-width: 10%;
    max-height: 50%;
`;

// setupapp

export const TimeOption = styled.option `
    height: 99px;
    padding: 100px;

`

export const TimeSelect = styled.select `
    height: auto;
    padding: 4px;
    border-radius: 5px;
    background: none;
    margin-left: 20px;
`

export const BookingForm = styled.form `
    display: flex;
    justify-content: flex-start;
`

// creating segmented control with animation for dog list
//maybe later lol

//UserInfo Component

export const UserInfoMain = styled.main `
    height: 500px;
    width: auto;
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
`;
