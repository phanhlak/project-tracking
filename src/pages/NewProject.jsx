import MainLayout from "../components/MainLayout";
import React from "react";

function NewProject() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Create New Project</h1>

      <form style={{ marginTop: "16px" }}>
        <input
          type="text"
          placeholder="Project name"
          style={{ display: "block", marginBottom: "12px", padding: "8px" }}
        />

        <textarea
          placeholder="Project description"
          style={{ display: "block", marginBottom: "12px", padding: "8px" }}
        />

        <button type="button">Create</button>
      </form>
    </div>
  );
}

export default NewProject;
