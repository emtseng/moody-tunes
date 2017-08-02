import React, { Component } from 'react'

/* ----- COMPONENT ----- */

export default class NavBar extends Component {
  render() {
    return (
      <nav className="flexcontainer-horizontal">
        <h5 id="title">MOODY TUNES</h5>
        <h6>visualizing the emotional arc of your current Spotify jam</h6>
      </nav>
    )
  }
}
