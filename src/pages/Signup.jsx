import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

// 🔐 Invitation Code (สำหรับ Officer)
const INVITE_CODE = "01";

function Signup() {
  const navigate = useNavigate();

  // state หลัก
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

  // 🔁 เลือก Student
  const selectStudent = () => {
    setRoleType("Student");
    setInvitePassed(true);
    setShowInvite(false);
    setError("");
    setForm({ ...form, role: "Student" });
  };

  // 🔁 เลือก Officer
  const selectOfficer = () => {
    setRoleType("Officer");
    setInvitePassed(false);
    setShowInvite(true);
    setError("");
    setForm({ ...form, role: "Officer" });
  };

  // 🔐 ตรวจ Invitation Code
  const checkInviteCode = () => {
    if (inviteInput === INVITE_CODE) {
      setInvitePassed(true);
      setShowInvite(false);
      setError("");
    } else {
      setError("Invitation Code ไม่ถูกต้อง");
    }
  };

  // ✏️ เปลี่ยนค่า input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // 📷 อัปโหลดรูป
  const handlePhoto = (e) => {
    setForm({ ...form, photo: e.target.files[0] });
  };

  // ✅ สมัคร
  const handleSubmit = (e) => {
    e.preventDefault();

    // เก็บข้อมูล (demo)
    localStorage.setItem("user", JSON.stringify(form));

    alert("สมัครสมาชิกสำเร็จ");
    navigate("/"); // กลับหน้า Login
  };

  return (
    <div className="signup-layout">
      {/* LEFT */}
      <div className="signup-left">
        <h2>SIGN UP</h2>
        <p>Student / Officer</p>

        {/* เลือก Role */}
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

        {/* ฟอร์ม */}
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

          {/* Upload รูป */}
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

          {/* ปุ่ม */}
          <div className="actions">
            <button
              type="button"
              className="back"
              onClick={() => navigate("/")}
            >
              Back
            </button>
            <button type="submit" className="signup">
              Sign up
            </button>
          </div>
        </form>
      </div>

      {/* RIGHT */}
      <div className="signup-right">
        <h1>
          PROJECT <span>TRACK📍NG</span>
          <br />
          SYSTEM
        </h1>
      </div>

      {/* 🔒 Popup Invitation Code */}
      {showInvite && (
        <div className="overlay">
          <div className="invite-box">
            <div className="lock">🔒</div>
            <p>PLEASE ENTER INVITATION CODE</p>

            <input
              placeholder="Invitation Code"
              value={inviteInput}
              onChange={(e) => setInviteInput(e.target.value)}
            />

            <div className="actions">
              <button onClick={() => setShowInvite(false)}>Back</button>
              <button onClick={checkInviteCode}>Enter</button>
            </div>

            {error && <p className="error">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
