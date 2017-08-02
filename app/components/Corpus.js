import React, { Component } from 'react'

class Corpus extends Component {
  render() {
    return (
      <div id="corpusBlock">
        <h6>
          you're listening to:
        </h6>
        <h4>
          {this.props.currSong || 'TBD'} by {this.props.currArtist || 'TBD'}
        </h4>
        <div className="buttonContainer">
          <button
            className="btn btn-success"
            onClick={this.props.grabCurrentSong}
          >
            Grab my current song
        </button>
        </div>
        <textarea
          name="corpus"
          value={this.props.corpus && this.props.corpus}
        />
      </div>
    )
  }
}

/* ----- IMPORT CONTAINER DEPENDENCIES ----- */

import { connect } from 'react-redux'
import { grabCurrSong } from '../reducers'

/* ----- CONTAINER ----- */

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

export default connect(mapStateToProps, mapDispatchToProps)(Corpus)
