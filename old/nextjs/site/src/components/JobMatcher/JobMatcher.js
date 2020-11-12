import React, { Component } from 'react';
import { StyledSection, H2, H3, Form } from './style';
import {  InputField, DefaultButton } from '../../constants/styleConstants'
import TextInput from '../TextInput/index'

export default class JobMatcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <StyledSection>
                <H2>Job Matcher</H2>
                <H3>If you are a recruiter, write the name of your company to verify if my profile match with your projects announced on LinkedIn</H3>
                <Form>
                    <InputField type="text" placeholder="Your company name" />
                    <TextInput  type="text" placeholder="Your company name" />
                    <DefaultButton>Find</DefaultButton>
                </Form>
            </StyledSection>
        )
    }
}