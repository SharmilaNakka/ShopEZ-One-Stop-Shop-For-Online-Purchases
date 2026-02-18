import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("user");

  const handleRegister = async () => {
    try {
      await API.post("/register", {
        username,
        email,
        password,
        usertype,
      });

      alert("Registration Successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create ShopEZ Account</h2>

        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* ROLE SELECT */}
        <select
          value={usertype}
          onChange={(e) => setUsertype(e.target.value)}
          style={{ marginTop: "10px", padding: "10px", width: "100%" }}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button className="auth-btn" onClick={handleRegister}>
          Register
        </button>

        <div className="switch-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </div>
      </div>
    </div>
  );
}

export default Register;
