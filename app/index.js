import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App.js'
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'

import '../public/stylesheets/index.scss'

import store from './store.js'

ReactDOM.render(
  (<Provider store={store}>
    <div id="rootBox" className="flexcontainer-vertical">
      <NavBar />
      <App />
      <Footer />
    </div>
  </Provider>),
  document.getElementById('root')
)

