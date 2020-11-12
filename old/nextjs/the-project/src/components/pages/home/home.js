import React, {Component} from "react"
import "./home.css"
import MiniWindow from "../../mini-window/mini-window";
import Left from "../../left/left";

class Home extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="home">
                <MiniWindow />
                <div className="container-home">
                   <Left/>
                    <div className="right"></div>
                </div>
            </div>
            
        )
    }
}

export default Home