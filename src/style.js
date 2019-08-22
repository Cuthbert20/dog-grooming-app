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
    align-items: center;
    
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

//   App.js styled components
export const HeadingPrimary = styled.h1 `
    color: #fff;
    text-transform: uppercase;
    
`;

export const HeadingMain = styled.span `
    display: block;
    font-size: 60px;
    font-weight: 500;
    letter-spacing: 25px;
`;

export const HeadingSub = styled.span `
    display: block;
    font-size: 20px;
    font-weight: 400px;
    letter-spacing: 10px;
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
    /* height: 100px; */
    width: auto;
    display: flex;
    justify-content: flex-start;
`;

export const UserHistory = styled.article `
    display: flex;
    align-items: flex-start;
    font-size: 24px;
    margin-top: 20px;
`;

export const AppArticle = styled.article `
    height: 1500px;
    width: 100vw;
    background-attachment: fixed;
    background-image: linear-gradient(to right bottom, rgba(164, 196, 223, 0.8), rgba(57, 55, 187, 0.8)), url('https://img4.goodfon.com/wallpaper/nbig/c/59/sobaka-drug-priroda-14.jpg');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 30px;
    clip-path: polygon(0 28%, 100% 0, 100% 100%, 0% 100%);
    margin: 30px;
`;

export const UserHistoryContainer = styled.summary `
    margin-top: 125px;
`;

//UpdateUser Component
export const AddDogContainer = styled.article `
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 420px;
    margin: 40px auto 0;
    padding: 7px 0;
    border-radius: 4px;
    box-shadow: 0 0 5px #666;
    box-sizing: border-box;
`;

export const DogUpdateList = styled.ul `
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const SelectDogDrop = styled.select `
    padding: 0.7rem 1.2rem 0.7rem 1.2rem;
    border-radius: 4px;
`;

export const UserDashHeader = styled.main `
    display: flex;
    align-items: center;
    justify-content: space-around;
`
