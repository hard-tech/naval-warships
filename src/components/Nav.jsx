import React, { Component } from 'react'
import IconSite from "../Images/icon/Icon_Flag.png";

export default class Nav extends Component {
  render() {
    return (
      <nav className='d-flex justify-content-around align-content-center align-items-center mb-5 mt-2'>
        <img src={IconSite} alt="Ico" width={70} style={{border:'5px solid', borderRadius:'50%'}} />
        <center><h1>Naval warships</h1></center>
        <div className=""></div>
      </nav>
    )
  }
}
