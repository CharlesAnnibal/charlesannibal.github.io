import React, { Component } from "react"
import {Link} from "react-router-dom"

import "./button.css"

class Button extends Component {
    constructor(props) {
        super(props);
        this.state ={
                "link":props.link,
                "text":props.text 
            };
        
    }

    render() {
        return (
            <Link className="btn-action" href={this.state.link}>
                {this.state.text}
            </Link>    
        )
    }
}

export default Button