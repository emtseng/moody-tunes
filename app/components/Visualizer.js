import React, { Component } from 'react'
import { VictoryChart, VictoryTheme, VictoryVoronoiContainer, VictoryAxis, VictoryScatter, VictoryLine, VictoryTooltip } from 'victory'

class Visualizer extends Component {
  docLength = (arr) => {
    let max = 0
    arr.forEach(obj => {
      if (obj.x > max) max = obj.x
    })
    return max
  }
  domainX = () => {
    return [-1, this.docLength(this.props.data.sentences)]
  }
  domain = () => {
    return {
      x: this.props.data.sentences ? this.domainX() : [-1, 10],
      y: [-1, 1]
    }
  }
  render() {
    return (
      <div className="flexcontainer-vertical z-depth-2" id="vizBlock">
        <div className="text-center" id="vizTitle">
          <h6>this is {this.props.currSong}'s</h6>
          <h4>sentimentagram</h4>
          <h6>This visualizer shows the progression of lyrical sentiment in your song over time.<br></br>Hover over a dot to see the line that generated it, and what Google thinks of its sentiment.</h6>
        </div>
        <div id="vizChart">
          <VictoryChart
            domainPadding={5}
            theme={VictoryTheme.material}
            width={400}
            height={200}
            margin={{ top: 0, bottom: 0, left: 80, right: 40 }}
            padding={{ top: 20, bottom: 20, left: 30, right: 30 }}
            containerComponent={<VictoryVoronoiContainer />}
            domain={this.domain()}
            animate={{ duration: 500 }}
          >
            <VictoryAxis
              label="Progression"
              style={{
                axis: { stroke: "#756f6a" },
                axisLabel: { fontSize: 10, padding: 60 },
                ticks: { stroke: "grey" },
                tickLabels: { fontSize: 10, padding: 5 }
              }}
            />
            <VictoryAxis
              dependentAxis
              label="Sentiment"
              tickFormat={tick => {
                const domainStartAndEnd = this.domain().y
                if (domainStartAndEnd.indexOf(tick) > -1) {
                  return tick === -1 ? '-1 (neg)' : '1 (pos)'
                } else {
                  return tick
                }
              }}
              style={{
                axis: { stroke: "#756f6a" },
                axisLabel: { fontSize: 10, padding: 40 },
                ticks: { stroke: "grey" },
                tickLabels: { fontSize: 10, padding: 5 }
              }}
            />
            <VictoryScatter
              data={this.props.data.sentences && this.props.data.sentences}
              size={(datum, active) => active ? 5 : 3}
            />
            <VictoryLine
              data={this.props.data.sentences && this.props.data.sentences}
              labels={datum => `'${datum.sentence}' \n ${datum.y}`}
              labelComponent={
                <VictoryTooltip
                  cornerRadius={1}
                  style={{
                    fontSize: 8,
                    padding: 5,
                    fontColor: 'white'
                  }}
                  flyoutStyle={{
                    stroke: 'none',
                    fill: '#D3767F'
                  }}
                />
              }
              interpolation="basis"
            />
          </VictoryChart>
        </div>
      </div>
    )
  }
}

/* ----- IMPORT CONTAINER DEPENDENCIES ----- */

import { connect } from 'react-redux'
import { passCorpusToChart } from '../reducers'

/* ----- CONTAINER ----- */

const mapStateToProps = (store, ownProps) => ({
  currSong: store.currSong,
  data: store.data,
  corpus: store.corpus
})

export default connect(mapStateToProps)(Visualizer)
