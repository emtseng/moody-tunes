import React from 'react'

const Corpus = (props) => (
  <div id="corpusBlock">
    <h2>LYRICS</h2>
    <div id="corpus" dangerouslySetInnerHTML={{__html: props.corpusHTML}} />
  </div>
)

import { connect } from 'react-redux'

const mapStateToProps = (store) => ({
  corpus: store.corpus,
  corpusHTML: store.corpusHTML
})

export default connect(mapStateToProps)(Corpus)
