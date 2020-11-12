import styled from 'styled-components'

export const MAIN_COLOR = "#4187e8";
export const SECOND_COLOR = "#50c77e";
export const MAIN_COLOR_DARKER = "#175dbf";
export const BLACK_COLOR = "#323b46";

export const MAIN_COLOR_DARK = "#01257F";
export const MAIN_COLOR_MEDIUM = "#001489";
export const DIGITAL_BLUE = "#1D19FF";
export const MAIN_COLOR_LIGHT = DIGITAL_BLUE;
export const LIGHT_BLUE = "rgba(29, 25, 255, 0.4)";
export const ORANGE = "#F6A000";
export const WHITE = "#ffffff";
export const BLACK = "#828282";
export const GRAY = "rgba(34, 34, 34, 0.6)" ;
export const LIGHT_GRAY = "#F3F4FA";
export const SECONDARY_COLOR = "#dadab1";
export const GOLD_GRADIENT = "";
export const SECONDARY_GOLD_GRADIENT = "";
export const DEFAULT_BORDER_RADIUS = "4px";
export const DEFAULT_HEIGHT_BUTTONS = "35px";
export const DEFAULT_FONT_FAMILY = "Roboto"
export const DEFAULT_BOX_SHADOW = "0px 3px 21px rgba(181, 181, 181, 0.4)";



export const InputField  = styled.input`
    margin:4px;
    height:45px;
    border-radius:5px;
    border:1px solid ${MAIN_COLOR_DARKER};
    padding:10px;
    width:100%;
    font-size:18px;
    text-align: center;

    @media(min-width:769px){
        width:50%;
    }
`

export const DefaultButton  = styled.button`
    margin:4px;
    height:45px;
    border:1px solid ${MAIN_COLOR_DARKER};
    border-radius:5px;
    background-color:${MAIN_COLOR};
    color:white;
    width:100%;
    font-size:18px;
    text-align: center;

    @media(min-width:769px){
        width:50%;
    }
`

export const Form = styled.form`
    display:flex;
`