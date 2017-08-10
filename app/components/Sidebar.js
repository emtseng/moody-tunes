import React, { Component } from 'react'

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <h1>MOODY<br />TUNES</h1>
        <p>An interactive visualizer for your current Spotify track.</p>
        <button
          autoFocus
          className="sidebar-btn"
          onClick={this.props.grabCurrentSong}
        >
          GET CURRENT SONG
        </button>
        <div className="sidebar-info">
          <p>you're listening to</p>
          <h1>{this.props.currSong || 'TBD'}</h1>
          <p>by</p>
          <h1>{this.props.currArtist || 'TBD'}</h1>
        </div>
      </div>
    )
  }
}

import { connect } from 'react-redux'
import { grabCurrSong } from '../reducers'

const mapStateToProps = (store) => {
  return {
    currSong: store.currSong,
    currArtist: store.currArtist,
    corpus: store.corpus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  grabCurrentSong: (evt) => {
    evt.preventDefault()
    dispatch(grabCurrSong(ownProps.access))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
