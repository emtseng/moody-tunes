import React, { Component } from 'react'

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <h1>MOODY<br />TUNES</h1>
        <div
          className="sidebar-btn"
          onClick={this.props.grabCurrentSong}
        >
          <h1>GET CURRENT SONG</h1>
        </div>
        <div className="sidebar-info">
          <h3>you're listening to</h3>
          <h1>{this.props.currSong || 'TBD'}</h1>
          <h3>by</h3>
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
