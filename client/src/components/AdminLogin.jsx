import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          username,
          password
        }
      );

      localStorage.setItem(
        "adminToken",
        res.data.token
      );

      navigate("/admin");

    } catch (err) {

      alert("Invalid Credentials");

    }

  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="w-[400px] p-10 border border-cyan-500 rounded-xl bg-cyan-500/10">

        <h1 className="text-3xl text-cyan-400 mb-8 text-center">
          Admin Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 bg-black border border-cyan-500 rounded"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-black border border-cyan-500 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full p-3 bg-cyan-400 text-black font-bold rounded"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default AdminLogin;