import React, {Component} from "react"
import "./mini-window.css"

class MiniWindow extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="mini-window">
               <div className="topbar"></div>
               <div className="content">
                   <div className="cards"></div>
                   <div className="cards"></div>
                   <div className="cards"></div>
               </div>
            </div>
            
        )
    }
}

export default MiniWindow