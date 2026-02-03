import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/dashboard.css";

function Sidebar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  return (
    <aside className="sidebar">
      <h2 className="logo">PROJECT<br />SYSTEM</h2>

      {user && (
        <div className="profile">
          <img src="https://i.pravatar.cc/80" alt="" />
          <p>{user.name} {user.surname}</p>
          <span>{user.role}</span>
        </div>
      )}

      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/status">Status</NavLink>
        <NavLink to="/project">Project</NavLink>
        <NavLink to="/new-project">New Project</NavLink>
        <NavLink to="/users">User Dashboard</NavLink>
        <NavLink to="/leave">Personal Leave</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
