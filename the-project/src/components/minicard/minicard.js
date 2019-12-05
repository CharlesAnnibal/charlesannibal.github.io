import React, {Component} from "react";
import "./minicard.css"
class About extends Component{
    constructor(props){
        super(props);

        this.state = {
            "description":this.props.description,
            "totalValue":"",
            "totalUsed":"",
            "color":"blue"
        }
    }

    render(){
        return(    
            <div class="minicard">
                <p>{this.state.description}</p>
            </div>
        );
    }


}

export default About;