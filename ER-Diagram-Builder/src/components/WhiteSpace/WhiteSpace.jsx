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

import { Box } from "@chakra-ui/react";
import ColorModeFlow from "../ColorMode/ColorModeFlow";
import { ExportButton } from "../ExportButton/ExportButton";
import { CircleNode, DiamondNode, ParallelogramNode, RectangleNode, SquareNode } from "../Another/Shape";

const initialEdges = [];
const initialNodes = [];

const nodeTypes = {
  rectangle: RectangleNode,
  parallelogram: ParallelogramNode,
  circle: CircleNode,
  square: SquareNode,
  diamond: DiamondNode,
};

const WhiteSpace = () => {
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
              // type: MarkerType.ArrowClosed,
              width: 10,
              height: 10,
              color: "#3470e4",
            },
            // label: "Hello",
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
        <h1 style={{fontSize:'20px', fontWeight: "bold", fontFamily:'sans-serif'}}>Shapes / Tools</h1>
        <button onClick={() => addNode("rectangle")}>Add Rectangle</button>
        <button onClick={() => addNode("parallelogram")}>Add Parallelogram</button>
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
          height: "90vh",
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

export default WhiteSpace;
