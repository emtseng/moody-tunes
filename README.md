# Moody Tunes

Moody Tunes is an interactive data visualizer that plots the sentiment of your current Spotify track over time.

Moody Tunes was initially built over a weekend hackathon at Fullstack Academy. It was then refactored and is currently both stable and [deployed on Heroku](https://moody-tunes-redux.herokuapp.com).

From time to time I update Moody Tunes to do more things. It's a pet project and a useful playground for any API under the sun. Enjoy!

## Current iteration

v2.0
Aug. 2017
- Redesigned for flat aesthetic

## Installation

Once the repo is cloned, run `npm install` to install the app and its dependencies.

You will not need an external database, but you will need to serve the app to fetch lyrics. To do this, run `npm start`.

## Add your own API keys

IMPORTANT: This app interfaces with the Spotify and Google Natural Language APIs. To use locally, set up your own developer accounts with these services. Then make a file in the top level of your project called secrets.js and format it like so:

```js
module.exports = {
  spotifyClientId: 'YOUR CLIENT ID GOES HERE',
  spotifyClientSecret: 'YOUR CLIENT SECRET GOES HERE',
  spotifyRedirectURI: 'YOUR REDIRECT URI GOES HERE',
  googleKey: 'YOUR GOOGLE KEY GOES HERE'
}
```

This will allow the app to communicate with the Spotify and Google APIs under your developer keys.

## To-dos:

Future versions will:

- Authenticate more securely
- Pull Spotify audio features (metrics like danceability, valence, mood) and visualize this data as separate cards
- Add a third dimension to the sentimentagram to incorporate the magnitude of each data point
- Allow users to track sentimentagrams over multiple songs, to visualize the sentiment arc of a playlist, or a day's worth of tunes

Made with <3 by [@emtseng](https://www.twitter.com/emtseng)
