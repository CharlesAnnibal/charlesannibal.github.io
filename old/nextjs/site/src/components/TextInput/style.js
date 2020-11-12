import styled from 'styled-components'

import { MAIN_COLOR_LIGHT, DEFAULT_BOX_SHADOW, MAIN_COLOR_DARK, WHITE, ORANGE, BLACK, GRAY } from '../../constants/styleConstants'

export const Wrapper = styled.div`
    width:100%;
    position:relative;
    display:flex;
    justify-content:center;
    background: #FFFFFF;
    box-shadow: ${props => props.shadow ? DEFAULT_BOX_SHADOW : 'none'};
    border-radius: ${props => props.shadow ? '5px' : '0'};
    padding: ${props => props.hasSelect ? '0 10px 0 10px' : '0'};
    flex:1;
`;

export const Input = styled.input`
  font-size: 14px;
  background-color:${WHITE};
  border-radius: ${props => props.shadow ? '5px' : '0'};
  color: ${BLACK};
  border: none;
  width: ${props => {
    let customWidth = props.width ? `${props.width}%` : 'auto'
    return props.hasSelect ? customWidth : '100%';
  }};
  padding: 20px 10px 20px 10px;
  &:focus {
      outline: none;
  }
  
`;

export const Label = styled.label`
  color: ${props => props.labelOnTop ? GRAY : GRAY};
  font-size: ${props => props.labelOnTop ? '11px' : '14px'};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: ${props => props.select && !props.labelOnTop ? "70px" : "10px"};
  top: ${props => props.labelOnTop ? "-5px" : "22px"};
  transition: 0.2s ease all;
`;