import React, { Component } from 'react';
import {StyledNavbar, Menu, MenuOption} from './style'

export default class Navbar extends Component {
   constructor(props) {
     super(props)
   }
   render() {
      return(
            <StyledNavbar>
                <span>Charles Annibal</span> 
                <Menu>
                    <MenuOption>About me</MenuOption>
                    <MenuOption>Projects</MenuOption>
                </Menu> 
            </StyledNavbar>
      )
   }
}