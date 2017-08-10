import React, { Component } from 'react'

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID && process.env.SPOTIFY_CLIENT_ID.replace(/"/g, '') || require('../../secrets.js').spotifyClientId
const spotifyRedirectURI = process.env.SPOTIFY_REDIRECT_URI && process.env.SPOTIFY_REDIRECT_URI.replace(/"/g, '') || require('../../secrets.js').spotifyRedirectURI

export default class LoginSpotify extends Component {
  render() {
    return (
      <div>
        <div id="loginInfo">
          <h1>MOODY<br />TUNES</h1>
          <h3>An interactive data visualizer examining the sentimental arc of your current Spotify track.</h3>
        </div>
        <div />
        <div id="loginBlock">
          <h3>START</h3>
          <button onClick={this.handleSpotifyLogin} >Log in with Spotify</button>
        </div>
      </div>
    )
  }
  generateRandomString = (length) => {
    let text = '',
      possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
  }
  handleSpotifyLogin = (evt) => {
    evt.preventDefault()
    window.localStorage['spotifyAuthKey'] = this.generateRandomString(16)
    const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(spotifyClientId)}&scope=${encodeURIComponent('user-read-currently-playing')}&redirect_uri=${encodeURIComponent(spotifyRedirectURI)}&state=${encodeURIComponent(localStorage['spotifyAuthKey'])}`
    window.location = url
  }
}
