import styled from 'styled-components'
import { MAIN_COLOR } from '../../constants/styleConstants'

export const StyledSection = styled.section`
    display:flex;
    height:60vh; 
    flex-direction:column;
    justify-content:center;   
    align-items:center;
    color:white;
    padding:5%;
    background-color:${MAIN_COLOR};

    @media(min-width:769px){
        flex-direction:row;
        height:40vh;
        padding: 5% 20%;

    }
`

export const Left = styled.div`
    flex:1;
    width:100%;
    
`

export const PhotoMask = styled.div`
    text-align: left;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
    position: relative;
    width: 30%;
    padding-bottom: 30%;
    margin: auto;
    opacity:0.6;

    @media(min-width:769px){
        margin: auto 0 auto;
        width: 40%;
        padding-bottom: 40%;
    }
`

export const MyPhoto = styled.img`
    width: 100%; 
    height: 100%; 
    position:absolute;
    object-fit: cover;
`


export const Right = styled.div`
    text-align:center;
    flex:3;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media(min-width:769px){
        flex:1;
    }
`



export const Text = styled.p`
    font-size:1.4rem;
`
