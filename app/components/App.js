import React, { Component } from 'react'

import Corpus from './Corpus'
import Visualizer from './Visualizer'
import LoginSpotify from './LoginSpotify'
import Sidebar from './Sidebar'

class App extends Component {
  render() {
    return (
      <div id="appBody">
        {
          this.props.isLoggedIntoSpotify ? (
            <div id="appBody">
              <Sidebar />
              <div id="contentBlock">
                <Corpus access={this.props.access_token} />
                <Visualizer />
              </div>
            </div>
          ) : <LoginSpotify />
        }
      </div>
    )
  }
  componentDidMount() {
    const params = this.getHashParams(),
      access_token = params.access_token,
      state = params.state,
      storedSpotifyState = window.localStorage['spotifyAuthKey']
    if (!access_token && (state == null || state !== storedSpotifyState)) {
      console.log('There was an error during Spotify authentication :(')
    } else {
      return this.props.saveToken(access_token)
    }
  }
  getHashParams = () => {
    let hashParams = {},
      e,
      regQuery = /([^&;=]+)=?([^&;]*)/g,
      query = window.location.hash.substring(1)
    while (e = regQuery.exec(query)) {
      hashParams[e[1]] = decodeURIComponent(e[2])
    }
    return hashParams
  }
}

/* ----- IMPORT CONTAINER DEPENDENCIES ----- */

import { connect } from 'react-redux'
import { storeToken } from '../reducers'

/* ----- CONTAINER ----- */

const mapStateToProps = (store, ownProps) => {
  return {
    isLoggedIntoSpotify: store.isLoggedIntoSpotify,
    access_token: store.access_token
  }
}

const mapDispatchToProps = (dispatch, getState) => ({
  saveToken: (token) => {
    dispatch(storeToken(token))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
