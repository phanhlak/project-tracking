import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Status from "./pages/Status";
import Project from "./pages/Project";
import NewProject from "./pages/NewProject";
import UserDashboard from "./pages/UserDashboard";
import PersonalLeave from "./pages/PersonalLeave";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔓 Public */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🔐 หลัง Login */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/status" element={<ProtectedRoute><Status /></ProtectedRoute>} />
        <Route path="/project" element={<ProtectedRoute><Project /></ProtectedRoute>} />
        <Route path="/new-project" element={<ProtectedRoute><NewProject /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
        <Route path="/leave" element={<ProtectedRoute><PersonalLeave /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
