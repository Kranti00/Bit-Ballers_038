import React, { useState, useCallback } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap,
  Background,
  Handle,
  Position,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  CircleNode,
  DiamondNode,
  ParallelogramNode,
  RectangleNode,
  SquareNode,
} from "../Another/Shape";
import { Box, ColorModeContext, Flex } from "@chakra-ui/react";
import ColorModeFlow from "../ColorMode/ColorModeFlow";
import { ExportButton } from "../ExportButton/ExportButton";

const initialEdges = [
  {
    id: "e1-4",
    source: "1",
    target: "4",
    type: "smoothstep",
    markerEnd: {
      width: 10,
      height: 10,
      color: "#3470e4",
    },
    style: {
      strokeWidth: 2,
      stroke: "#3470e4",
    },
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    type: "smoothstep",
    markerEnd: {
      width: 10,
      height: 10,
      color: "#3470e4",
    },
    style: {
      strokeWidth: 2,
      stroke: "#3470e4",
    },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    type: "smoothstep",
    markerEnd: {
      width: 10,
      height: 10,
      color: "#3470e4",
    },
    style: {
      strokeWidth: 2,
      stroke: "#3470e4",
    },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    type: "smoothstep",
    markerEnd: {
    //   type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#3470e4",
    },
    style: {
      strokeWidth: 2,
      stroke: "#3470e4",
    },
  },
  {
    id: "e4-7",
    source: "4",
    target: "7",
    type: "smoothstep",
    markerEnd: {
    //   type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#3470e4",
    },
    style: {
      strokeWidth: 2,
      stroke: "#3470e4",
    },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    type: "smoothstep",
    markerEnd: {
      width: 10,
      height: 10,
      color: "#3470e4",
    },
    style: {
      strokeWidth: 2,
      stroke: "#3470e4",
    },
  },
  {
    id: "e6-8",
    source: "6",
    target: "8",
    type: "smoothstep",
    markerEnd: {
      width: 10,
      height: 10,
      color: "#3470e4",
    },
    style: {
      strokeWidth: 2,
      stroke: "#3470e4",
    },
  },
  {
    id: "e6-9",
    source: "6",
    target: "9",
    type: "smoothstep",
    markerEnd: {
      width: 10,
      height: 10,
      color: "#3470e4",
    },
    style: {
      strokeWidth: 2,
      stroke: "#3470e4",
    },
  },
  {
    id: "e7-11",
    source: "7",
    target: "11",
    type: "smoothstep",
    markerEnd: {
      width: 10,
      height: 10,
      color: "#3470e4",
    },
    style: {
      strokeWidth: 2,
      stroke: "#3470e4",
    },
  },
  {
    id: "e11-10",
    source: "11",
    target: "10",
    type: "smoothstep",
    markerEnd: {
      width: 10,
      height: 10,
      color: "#3470e4",
    },
    style: {
      strokeWidth: 2,
      stroke: "#3470e4",
    },
  },
  {
    id: "e10-6",
    source: "10",
    target: "6",
    type: "smoothstep",
    markerEnd: {
      width: 10,
      height: 10,
      color: "#3470e4",
    },
    style: {
      strokeWidth: 2,
      stroke: "#3470e4",
    },
  },
  {
    id: "e11-12",
    source: "11",
    target: "12",
    type: "smoothstep",
    markerEnd: {
      width: 10,
      height: 10,
      color: "#3470e4",
    },
    style: {
      strokeWidth: 2,
      stroke: "#3470e4",
    },
  },
  {
    id: "e11-13",
    source: "11",
    target: "13",
    type: "smoothstep",
    markerEnd: {
      width: 10,
      height: 10,
      color: "#3470e4",
    },
    style: {
      strokeWidth: 2,
      stroke: "#3470e4",
    },
  },
  {
    id: "e11-14",
    source: "11",
    target: "14",
    type: "smoothstep",
    markerEnd: {
      width: 10,
      height: 10,
      color: "#3470e4",
    },
    style: {
      strokeWidth: 2,
      stroke: "#3470e4",
    },
  },
];
const initialNodes = [
  {
    id: "1",
    data: { label: "price" },
    position: { x: 50, y: 100 },
    type: "circle",
  },
  {
    id: "2",
    data: { label: "name" },
    position: { x: 175, y: 100 },
    type: "circle",
  },
  {
    id: "3",
    data: { label: "category" },
    position: { x: 300, y: 100 },
    type: "circle",
  },
  {
    id: "4",
    data: { label: "Product" },
    position: { x: 150, y: 300 },
    type: "rectangle",
  },
  {
    id: "5",
    data: { label: "Makes" },
    position: { x: 450, y: 275 },
    type: "diamond",
  },
  {
    id: "6",
    data: { label: "Company" },
    position: { x: 750, y: 300 },
    type: "rectangle",
  },
  {
    id: "7",
    data: { label: "Buys" },
    position: { x: 150, y: 500 },
    type: "diamond",
  },
  {
    id: "8",
    data: { label: "name" },
    position: { x: 950, y: 100 },
    type: "circle",
  },
  {
    id: "9",
    data: { label: "stockPrice" },
    position: { x: 950, y: 250 },
    type: "circle",
  },
  {
    id: "10",
    data: { label: "Employs" },
    position: { x: 750, y: 500 },
    type: "diamond",
  },
  {
    id: "11",
    data: { label: "Person" },
    position: { x: 450, y: 675 },
    type: "rectangle",
  },
  {
    id: "12",
    data: { label: "address" },
    position: { x:250, y: 775 },
    type: "circle",
  },
  {
    id: "13",
    data: { label: "name" },
    position: { x: 450, y: 775 },
    type: "circle",
  },
  {
    id: "14",
    data: { label: "ssn" },
    position: { x: 650, y: 775 },
    type: "circle",
  },
];

const nodeTypes = {
  rectangle: RectangleNode,
  parallelogram: ParallelogramNode,
  circle: CircleNode,
  square: SquareNode,
  diamond: DiamondNode,
};

const Template = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [newLabel, setNewLabel] = useState("");
  const [colorMode, setColorMode] = useState("dark");

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "smoothstep",
            markerEnd: {
              type: MarkerType.ArrowClosed,
              width: 10,
              height: 10,
              color: "#3470e4",
            },
            style: {
              strokeWidth: 2,
              stroke: "#3470e4",
            },
          },
          eds
        )
      );
    },
    [setEdges]
  );

  const addNode = (shapeType) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: `${nodes.length + 1}` },
      type: shapeType,
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const deleteNode = () => {
    setNodes((nds) => nds.filter((node) => node.id !== selectedNodeId));
    setEdges((eds) =>
      eds.filter(
        (edge) =>
          edge.source !== selectedNodeId && edge.target !== selectedNodeId
      )
    );
    setSelectedNodeId(null);
  };

  const handleLabelChange = (event) => {
    setNewLabel(event.target.value);
  };

  const applyLabelChange = () => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNodeId
          ? { ...node, data: { ...node.data, label: newLabel } }
          : node
      )
    );
    setNewLabel("");
    setSelectedNodeId(null);
  };

  return (
    <div className="White-space">
      <div
        className="sidebar"
        style={{ position: "relative", top: 0, left: 0, zIndex: 10 }}
      >
        <h2>Tools</h2>
        <button onClick={() => addNode("rectangle")}>Add Rectangle</button>
        <button onClick={() => addNode("parallelogram")}>
          Add Parallelogram
        </button>
        <button onClick={() => addNode("circle")}>Add Circle</button>
        <button onClick={() => addNode("square")}>Add Square</button>
        <button onClick={() => addNode("diamond")}>Add Diamond</button>

        <button onClick={addNode}>Add Node</button>
        {selectedNodeId && (
          <>
            <button onClick={deleteNode}>Delete Node</button>
            <input
              type="text"
              value={newLabel}
              onChange={handleLabelChange}
              placeholder="New Label"
            />
            <button
              onClick={applyLabelChange}
              style={{
                backgroundColor: "#111316",
                color: "white",
                padding: "10px  ",
              }}
            >
              Change Label
            </button>
          </>
        )}
      </div>
      <Box
        id="whiteBoard"
        style={{
          width: "80%",
          height: "100vh",
          border: "1px solid",
          backgroundColor: colorMode === "dark" ? "#333" : "#fff",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={(_, node) => setSelectedNodeId(node.id)}
          nodeTypes={nodeTypes}
        >
          <ExportButton elementId="whiteBoard" />
          <Controls />
          <MiniMap
            style={{ backgroundColor: colorMode === "dark" ? "#333" : "gray" }}
          />
          <Background />
          <ColorModeFlow colorMode={colorMode} setColorMode={setColorMode} />
        </ReactFlow>
      </Box>
    </div>
  );
};

export default Template;
