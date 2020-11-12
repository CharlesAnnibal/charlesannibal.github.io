import React, { Component } from "react"
import "./left.css"
import Menu from "../menu/menu";
import Button from "../button/button";

class Left extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="left">
                <Menu />
                <div>
                    <h1>Let's create awesome projects using Wordpress!</h1>
                    <p>I´m Charles Santos. I have 6 years of experience in web development and I want to help you to build a good solution </p>
                    <Button text="Abouttt" link="/about"/>
                </div>
            </div>
        )
    }
}

export default Left