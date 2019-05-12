import React, { Component } from "react";
import Graph from "react-graph-vis";

export class NetworkGraph extends Component {
  render() {
    return (
      <div className="graph">
        <Graph
          graph={this.props.graph}
          options={this.props.options}
          events={this.props.events}
        />
      </div>
    );
  }
}

export default NetworkGraph;
