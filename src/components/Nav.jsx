import React, { Component } from "react";

import Icon from "../Images/icon/Icon_Flag.png";

export default class Nav extends Component {
  render() {
    return (
      <nav className="d-flex justify-content-around align-content-center align-items-center mt-2 border-bottom border-3 pb-2 mb-5 border-white">
        <img src={Icon} alt="" className="m-2" width={60} height={60} />
        <h1>
          <a href="/">PinTheFlag</a>
        </h1>
        <div className=""></div>
      </nav>
    );
  }
}
