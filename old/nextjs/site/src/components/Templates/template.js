import React, { Component } from 'react';
import Navbar from '../Navbar';
import Head from 'next/head'
import { GlobalStyle } from './globalStyle'
import Chat from '../Chat';

export default class Template extends Component {
   constructor(props) {
      super(props)
   }
   render() {
      return (
         <div>
            <Head>
               <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet"/>
               <title>Charles Annibal dos Santos - Developer</title>
            </Head>
            <GlobalStyle whiteColor />
            <Navbar />
            {this.props.children}
            <Chat>aaa</Chat>
         </div>

      )
   }
}