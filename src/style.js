import styled from 'styled-components'

export const ServicesContainer = styled.section `
    /* background-color: #1a1a1a; */
    background-color: none;
    color: #f2f2f2;
    margin: 10px 0;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    /* border: 1px pink solid; */
    `;
export const LandingContainer = styled.section `
    /* background-color: #1a1a1a; */
    background-color: none;
    display: flex;
    flex-direction: column;
    /* border: 1px orange solid; */
    color: white;
    padding: 0 10px;
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
    justify-content: flex-end;
    
`;

//SetupApp Component

export const AppointmentContainer = styled.main `
    border: 1px lightskyblue solid;
`;

// general Style Components

export const PinkButton = styled.button `
    /* background-color: #ffb3cc; */
    /* border: 1px pink solid; */
    padding: 0.6rem;
    margin: 0 0.5rem;
    border-radius: 10px;
    :hover {
        background: #1a1a1a;
        color: #ffb3cc;
        border: 1px solid #ffb3cc;
    }
    :focus {
        outline: none;
    }
`;