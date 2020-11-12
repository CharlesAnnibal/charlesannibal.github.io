import styled from 'styled-components'

export const BannerSection = styled.section`
    display:flex;
    margin-top:10vh;
    flex-direction:column;
    justify-content:center;   
    align-items:center;
    padding:5%;
    
    @media(min-width:769px){
        height:50vh; 
    }
`

export const BannerH1 = styled.h1`
    font-size:2.5rem;
    text-align:center;
`

export const BannerH2 = styled.h2`
    text-align:center;
    font-size:2rem;
`