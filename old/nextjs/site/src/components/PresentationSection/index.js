import React, { Component } from 'react';
import {StyledSection, Left, Right, Text, PhotoMask, MyPhoto} from './style';
export default class PresentationSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <StyledSection>
                <Left>
                    <PhotoMask>
                        <MyPhoto src='/me.png'/>
                    </PhotoMask>
                </Left>
                <Right>
                    <Text>I'm Charles Annibal dos Santos. i have been worked in IT companies for several sectors as banking, logistic, human resources and transport.</Text>
                    <Text>Now I would like to realize a project with you!</Text>
                </Right>
             </StyledSection>
        )
    }
}