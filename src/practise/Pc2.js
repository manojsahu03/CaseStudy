import React from "react";
class Pc2 extends React.Component {
  constructor(props) {
    super(props); // always start with this
    this.state = { favocolor: "blue" };
  }

  render() {
    return <h1>My fov color{this.state.favocolor}</h1>;
  }
}
export default Pc2;
