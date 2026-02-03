import MainLayout from "../components/MainLayout";
import React from "react";

function Project() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Project Page</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px",
          background: "#f5f5f5",
          borderRadius: "8px",
          marginTop: "12px",
        }}
      >
        <span>Example Project</span>
        <span>Status: ACTIVE</span>
      </div>
    </div>
  );
}

export default Project;
