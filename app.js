const express = require('express')
    , path = require('path')
    , morgan = require('morgan')
    , bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }))

app.use('/static', express.static(path.join(__dirname, 'public')))

const getLyrics = require('lyric-get').get

app.use('/api/lyrics/:artist/:song', (req, res, next) => {
  getLyrics(req.params.artist, req.params.song, (err, lyric) => {
    if (err) return next(err)
    res.send({ lyric })
  })
})

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

const $PORT = process.env.PORT || 3000

app.listen($PORT, function () {
  console.log(`Server is listening on port ${$PORT}!`)
});
