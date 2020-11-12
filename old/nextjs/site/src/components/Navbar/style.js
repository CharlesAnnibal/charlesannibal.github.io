import styled from 'styled-components'
import {MAIN_COLOR, SECOND_COLOR, BLACK_COLOR} from '../../constants/styleConstants'

export const StyledNavbar = styled.nav`
    background-color:white;
    border-bottom:3px solid ${SECOND_COLOR};    
    display:flex;
    position:fixed;
    width:100%;
    height:10vh;
    top:0;
    background-color:white;
    z-index:1;
    justify-content:space-between;
    align-items:center;
    font-size:1rem;
    font-weight:500;
    outline:3px solid ${MAIN_COLOR};
    color:${MAIN_COLOR};
    padding:0 10%;

    @media(min-width:768px){
        padding:0 20%;
    }
`

export const Brand = styled.img`

`

export const Menu = styled.ul`
    display:flex;
    align-items:center;
    list-style-type:none;
    margin:0;
    padding:0;
    height:100%;
`

export const MenuOption = styled.li`
    padding:20px;
`