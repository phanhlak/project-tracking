import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Status from "../pages/Status";
import Project from "../pages/Project";
import NewProject from "../pages/NewProject";
import UserDashboard from "../pages/UserDashboard";
import PersonalLeave from "../pages/PersonalLeave";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={
        <ProtectedRoute><Dashboard /></ProtectedRoute>
      } />

      <Route path="/status" element={<ProtectedRoute><Status /></ProtectedRoute>} />
      <Route path="/project" element={<ProtectedRoute><Project /></ProtectedRoute>} />
      <Route path="/new-project" element={<ProtectedRoute><NewProject /></ProtectedRoute>} />
      <Route path="/users" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
      <Route path="/leave" element={<ProtectedRoute><PersonalLeave /></ProtectedRoute>} />
    </Routes>
  );
}
