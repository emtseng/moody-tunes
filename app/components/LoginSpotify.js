import React, { Component } from 'react'
import $ from 'jquery'

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID ? process.env.SPOTIFY_CLIENT_ID.replace(/"/g, '') : require('../../secrets.js').spotifyClientId
const spotifyRedirectURI = process.env.SPOTIFY_REDIRECT_URI ? process.env.SPOTIFY_REDIRECT_URI.replace(/"/g, '') : require('../../secrets.js').spotifyRedirectURI

export default class LoginSpotify extends Component {
  render() {
    return (
      <div id="loginContainer">
        <div id="loginInfo">
          <h1>MOODY<br />TUNES</h1>
          <p>An interactive data visualizer examining the sentimental arc of your current Spotify track.</p>
          <p>by <a href="http://github.com/emtseng">@emtseng</a></p>
        </div>
        <hr width={1} size={$(window).height() * .9} />
        <div id="loginBlock">
          <button onClick={this.handleSpotifyLogin} >Log in with Spotify</button>
          <p>Moody Tunes does not store your data.</p><p>What you do in Private Session is between you and Spotify, Google, your IP, your Congressperson, etc, but not us!</p>
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
