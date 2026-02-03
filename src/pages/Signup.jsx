import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

const INVITE_CODE = "01";

function Signup() {
  const navigate = useNavigate();

  const [roleType, setRoleType] = useState("Student");
  const [showInvite, setShowInvite] = useState(false);
  const [inviteInput, setInviteInput] = useState("");
  const [invitePassed, setInvitePassed] = useState(true);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    surname: "",
    telephone: "",
    role: "Student",
    photo: null,
  });

  // 👉 เลือก Student
  const selectStudent = () => {
    setRoleType("Student");
    setInvitePassed(true);
    setShowInvite(false);
    setError("");
    setForm({ ...form, role: "Student" });
  };

  // 👉 เลือก Officer → เปิด Lock
  const selectOfficer = () => {
    setRoleType("Officer");
    setInvitePassed(false);
    setShowInvite(true);
    setError("");
    setForm({ ...form, role: "Officer" });
  };

  // 👉 ตรวจ Invitation Code
  const checkInviteCode = () => {
    if (inviteInput === INVITE_CODE) {
      setInvitePassed(true);
      setShowInvite(false);
      setError("");
    } else {
      setError("Invitation Code ไม่ถูกต้อง");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePhoto = (e) => {
    setForm({ ...form, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    alert("สมัครสมาชิกสำเร็จ");
    navigate("/");
  };

  return (
    <div className="signup-layout">
      {/* LEFT */}
      <div className={`signup-left ${showInvite ? "blur" : ""}`}>
        <h2>SIGN UP</h2>
        <p className="sub">Student / Officer</p>

        <div className="role-toggle">
          <button
            type="button"
            className={roleType === "Student" ? "active" : ""}
            onClick={selectStudent}
          >
            Student
          </button>
          <button
            type="button"
            className={roleType === "Officer" ? "active" : ""}
            onClick={selectOfficer}
          >
            Officer
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className={!invitePassed ? "disabled" : ""}
        >
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            disabled={!invitePassed}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            disabled={!invitePassed}
            required
          />

          <div className="row">
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              disabled={!invitePassed}
              required
            />
            <input
              name="surname"
              placeholder="Surname"
              onChange={handleChange}
              disabled={!invitePassed}
              required
            />
          </div>

          <input
            name="telephone"
            placeholder="Telephone"
            onChange={handleChange}
            disabled={!invitePassed}
            required
          />

          <label className="upload-box">
            Front-facing photo
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handlePhoto}
              disabled={!invitePassed}
            />
          </label>

          <div className="signup-buttons">
            <button
              type="button"
              className="btn back-btn"
              onClick={() => navigate("/")}
            >
              Back
            </button>

            <button type="submit" className="btn signup-btn">
              Sign up
            </button>
          </div>
        </form>
      </div>

      {/* RIGHT */}
      <div className={`signup-right ${showInvite ? "blur" : ""}`}>
        <h1>
          PROJECT <span>TRACK📍NG</span>
          <br />
          SYSTEM
        </h1>
      </div>

      {/* 🔒 Overlay Invitation Code */}
      {showInvite && (
        <div className="overlay">
          <div className="invite-box">
            <div className="lock-icon">🔒</div>
            <p className="invite-title">PLEASE ENTER INVITATION CODE</p>

            <input
              placeholder="Invitation Code"
              value={inviteInput}
              onChange={(e) => setInviteInput(e.target.value)}
            />

            <div className="actions">
              <button
                className="btn back-btn"
                onClick={() => {
                  setShowInvite(false);
                  setRoleType("Student");
                  setInvitePassed(true);
                }}
              >
                Back
              </button>
              <button className="btn signup-btn" onClick={checkInviteCode}>
                Enter
              </button>
            </div>

            {error && <p className="error">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
