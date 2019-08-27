import React, { Component } from 'react'

export default class notepad extends Component {
    render() {
        return (
            <nav id="main-menu" class="main-menu">
                  <a href="#main-menu" class="menu-toggle">
    <span class="fa fa-bars"></span>
  </a>
  
  <h1 class="logo">hamburgers</h1>
  
  <nav id="main-menu" class="main-menu">
    <a href="#main-menu-toggle" class="menu-close">
      <span class="fa fa-close"></span>
    </a>
    <ul>
      <li><a href="#">Products</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  <a href="#main-menu-toggle" class="backdrop" hidden></a>

            </nav>
        )
    }
}

export const UserInfoInput = styled.input `
  border: 5px solid white;
    box-shadow:
        inset 0 0 8px rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1);
    padding: 5px;
    background-color: rgba(255,255,255,0.5);
    margin: 0 0 5px 0;
    transition: all 0.30s ease-in-out;
    :focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
        border: 5px solid rgb(81, 203, 238, 1);
    }
`;