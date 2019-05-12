export const graphSettings = {
  edges: {
    color: "#000000",
    arrows: {
      to: { enabled: false }
    }
  },
  nodes: {
    color: {
      background: "#D3D3D3",
      border: "black",
      highlight: {
        background: "pink",
        border: "black"
      }
    },
    shape: "circle"
  },
  physics: {
    enabled: false
  },
  interaction: { multiselect: true, dragView: true }
};

export const nodesInitial = [
  { id: 1, label: "Node1" },
  { id: 2, label: "Node2" },
  { id: 3, label: "Node3" },
  { id: 4, label: "Node4" },
  { id: 5, label: "Node5" }
];

export const nodeDictionary = {
  Node1: 1,
  Node2: 2,
  Node3: 3,
  Node4: 4,
  Node5: 5
};

export const edgesInitial = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
  { from: 2, to: 5 }
];

export const edgesDictionary = {
  Node1: ["Node1", "Node2", "Node3"],
  Node2: ["Node2", "Node1", "Node4", "Node5"],
  Node3: ["Node3", "Node1"],
  Node4: ["Node4", "Node2"],
  Node5: ["Node5", "Node2"]
};
