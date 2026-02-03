import { useEffect, useState } from "react";
import "../styles/dashboard.css";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const [time, setTime] = useState(new Date());

  // เวลา real-time
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) =>
    date.toLocaleTimeString("th-TH", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  return (
    <div className="dashboard-page">
      {/* ===== LEFT SIDEBAR ===== */}
      <aside className="sidebar">
        <h2 className="logo">PROJECT<br />SYSTEM</h2>

        <img
          className="avatar"
          src="https://i.pravatar.cc/150"
          alt="profile"
        />

        <p className="username">{user?.username}</p>
        <p className="role">Officer</p>

        <nav>
          <a className="active">Dashboard</a>
          <a>Status</a>
          <a>Project</a>
          <a>New Project</a>
          <a>User Dashboard</a>
          <a>Personal Leave</a>
        </nav>
      </aside>

      {/* ===== MAIN CONTENT (วงกลมแดง) ===== */}
      <main className="dashboard-content">
        {/* เวลา */}
        <div className="clock">🕒 {formatTime(time)}</div>

        {/* Timeline */}
        <section className="timeline-card">
          <p className="code">NU_SCI_COM_001_66310172</p>
          <h3>เอกสารรายวิชาของนิสิต</h3>

          <div className="timeline">
            <span className="done" />
            <span />
            <span />
            <span />
          </div>

          <button className="edit-btn">Edit</button>
        </section>

        {/* Bottom cards */}
        <div className="grid">
          {/* Project */}
          <section className="card">
            <h4>Project</h4>
            <ul>
              <li className="red">Example <span>1 DAY LEFT</span></li>
              <li className="yellow">Example <span>2 DAY LEFT</span></li>
              <li className="green">Example <span>FINISHED</span></li>
              <li className="green">Example <span>FINISHED</span></li>
            </ul>
          </section>

          {/* Contact */}
          <section className="card">
            <h4>Contact number</h4>
            <table>
              <tbody>
                <tr>
                  <td>{user?.username}</td>
                  <td>XXXX</td>
                  <td>095-XXX-XXXX</td>
                </tr>
                <tr>
                  <td>Example</td>
                  <td>XXXX</td>
                  <td>095-XXX-XXXX</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </div>
  );
}
