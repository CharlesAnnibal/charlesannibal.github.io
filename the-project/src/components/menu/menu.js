import React, {Component} from "react"
import "./menu.css"

class Menu extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
          <div className="menu">
              <p className="menu-option" >About</p>
              <p className="menu-option" >Examples</p>
              <p className="menu-option" >Contact</p>
          </div>  
        );
    }
}

export default Menu