
import styled from 'styled-components';
import { GREEN, LIGHT_BLUE, WHITE } from '../../../../constants/defaultStyleConsts';

export const HomeBannerSection = styled.section`
    height:80vh;
    width:100%;
`

export const BgMask = styled.div`
    height:100%;
    mask:url("${ROOT_URL}/images/home-bg-mask.svg");
    background-image: radial-gradient(circle at 90% 100%,  ${LIGHT_BLUE}, ${GREEN} 82%);
    mask-size: cover;
    mask-repeat: no-repeat;
    position:relative;
`
export const MatrixMask = styled.canvas`
    position:absolute;  
    height:100%;
    width:15%;
    right:0;
    display:block;
    mask:url("${ROOT_URL}/images/mask-matrix.png");
    //background-color:black;
    //background-image: radial-gradient(circle at 90% 100%,  ${LIGHT_BLUE}, ${GREEN} 82%);
    mask-size: cover;
    mask-repeat: no-repeat;
`

export const FirstSectionGrid = styled.div`
    display:grid;
    grid-template-columns: 10% 20% 20% 20% 20% 10%;
    grid-template-rows: 20% 20% 20% 20% 20%;
    grid-template-areas: 
    ". . . . . ."
    ". header1 header1 header1 . ."
    ". header1 header1 header1 . ."
    ". header2 header2 . . ."
    ". . . . . .";
    height:100%;

`

export const Header1 = styled.h1`
    font-size:5vw;
    color:${WHITE};
    margin:0;
    grid-area: header1;
`

export const Header2 = styled.h2`
    font-size:2.3vw;
    color:${WHITE};
    margin:0;
    grid-area: header2;
`