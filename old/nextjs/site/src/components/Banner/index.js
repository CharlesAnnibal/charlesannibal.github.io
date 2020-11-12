import React, { Component } from 'react';
import {BannerSection, BannerH1, BannerH2} from './style'
export default class Banner extends Component {
   constructor(props) {
        super(props)
   }
   render() {
      return(
        <BannerSection>
            <BannerH1>Charles Annibal Developer</BannerH1>
            <BannerH2>Creating great solutions for Web</BannerH2>
        </BannerSection>
      )
   }
}