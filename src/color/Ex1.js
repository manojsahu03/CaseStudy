import React from "react";
class Bus extends React.Component{
    constructor(){
        super();
        this.state={color:"red"}
    }
    render(){
        return <h2> i am a {this.state.color}Bus</h2>
    }
}
export default Bus