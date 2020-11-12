import styled from 'styled-components'
import { MAIN_COLOR, SECOND_COLOR, MAIN_COLOR_DARKER  } from '../../constants/styleConstants'

export const StyledSection = styled.section`
    display:flex;
    height:90vh; 
    flex-direction:column;
    justify-content:flex-start;   
    align-items:center;
    text-align:center;
    color:${MAIN_COLOR_DARKER};
    padding:5%;
    background-color:#fff;

    @media(min-width:769px){
        padding: 5% 20%;
    }
`

export const H2 = styled.h2`
    font-size:2rem;
`

export const H3 = styled.h3`
    font-size:1.7rem;

`

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    width:100%;
    @media(min-width:769px){
        flex-direction:row;
        width:70%;
    }
`

