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