import React, { Component } from "react";
import NetworkGraph from "./components/NetworkGraph";
import AddNode from "./components/AddNode";
import AddEdge from "./components/AddEdge";
import {
  graphSettings,
  nodesInitial,
  edgesInitial,
  nodeDictionary,
  edgesDictionary
} from "./assets/data";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      options: graphSettings,
      graph: {
        nodes: nodesInitial,
        edges: edgesInitial
      },
      nodeDic: nodeDictionary,
      edgesDic: edgesDictionary,
      nodeExist: false,
      nodeWhiteSpace: false,
      emptyNodeInput: false,
      emptyEdgeInput: false
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", e => {});
    document.addEventListener("mousemove", e => {});
  }

  events = {
    dragStart: event => {},
    dragEnd: event => {}
  };

  addNode = label => {
    label.length === 0
      ? this.setState({
          emptyNodeInput: true,
          nodeExist: false,
          nodeWhiteSpace: false
        })
      : label.indexOf(" ") >= 0
      ? this.setState({
          nodeWhiteSpace: true,
          emptyNodeInput: false,
          nodeExist: false
        })
      : this.state.nodeDic[label]
      ? this.setState({
          nodeExist: true,
          emptyNodeInput: false,
          nodeWhiteSpace: false
        })
      : this.setState({
          graph: {
            nodes: [
              ...this.state.graph.nodes,
              { id: this.state.graph.nodes.length + 1, label: label }
            ],
            edges: [...this.state.graph.edges]
          },
          nodeDic: {
            ...this.state.nodeDic,
            [label]: this.state.graph.nodes.length + 1
          },
          edgesDic: { ...this.state.edgesDic, [label]: [label] },
          nodeExist: false,
          emptyNodeInput: false,
          nodeWhiteSpace: false
        });
  };

  addEdge = (from, to) => {
    from.length === 0 || to.length === 0
      ? this.setState({
          emptyEdgeInput: true
        })
      : this.state.edgesDic[from].includes(to)
      ? this.setState({
          emptyEdgeInput: false
        })
      : this.setState({
          graph: {
            nodes: [...this.state.graph.nodes],
            edges: [
              ...this.state.graph.edges,
              { from: this.state.nodeDic[from], to: this.state.nodeDic[to] }
            ]
          },
          edgesDic: {
            ...this.state.edgesDic,
            [from]: [...this.state.edgesDic[from], to]
          },
          emptyEdgeInput: false
        });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">React Network Visualization</h1>
        <div className="contentWrapper">
          <NetworkGraph
            graph={this.state.graph}
            options={this.state.options}
            events={this.state.events}
          />
          <div className="forms">
            <AddNode
              addNode={this.addNode}
              emptyNodeInput={this.state.emptyNodeInput}
              nodeExist={this.state.nodeExist}
              nodeWhiteSpace={this.state.nodeWhiteSpace}
            />
            <AddEdge
              addEdge={this.addEdge}
              nodeDic={this.state.nodeDic}
              edgeDic={this.state.edgesDic}
              emptyEdgeInput={this.state.emptyEdgeInput}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
