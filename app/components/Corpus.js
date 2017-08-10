import React from 'react'

const Corpus = (props) => (
  <div id="corpusBlock">
    <h3>LYRICS</h3>
    <textarea
      name="corpus"
      value={props.corpus && props.corpus}
    />
  </div>
)

import { connect } from 'react-redux'

const mapStateToProps = (store) => ({
  corpus: store.corpus
})

export default connect(mapStateToProps)(Corpus)
