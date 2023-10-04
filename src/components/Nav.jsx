import React, { Component } from 'react'
import IconSite from "../Images/icon/icon.png";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <img src={IconSite} alt="Ico" width={50} />
        <center><h1>Naval warships</h1></center>
      </nav>
    )
  }
}
