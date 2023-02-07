import React from "react";
 class Header extends React.Component{
    constructor(){
        super()
        this.state={Name:"manoj",city:"raipur"}
    }
    render(){
        return( 
        <h1>hell0 myself {this.state.Name} come from {this.state.city}</h1>
        )
    }
}

export default Header