import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const [register, setRegister] = useState({
    FullName: "",
    Email: "",
    Password: "",
    Location: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const navigate = useNavigate();

  const handleRegisterChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleInsert = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/insert", register);
      setMessage(res.data.message);
      setMessageType("success");

      setRegister({
        FullName: "",
        Email: "",
        Password: "",
        Location: "",
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
      setMessageType("error");
    }
  };

  return (
    <div className="registration-page">
      <form onSubmit={handleInsert} className="form">

        {/* Full Name */}
        <input
          type="text"
          name="FullName"
          value={register.FullName}
          onChange={handleRegisterChange}
          placeholder="Enter Full Name"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="Email"
          value={register.Email}
          onChange={handleRegisterChange}
          placeholder="Enter Email"
          required
        />

        {/* Password */}
        <input
          type="password"
          name="Password"
          value={register.Password}
          onChange={handleRegisterChange}
          placeholder="Enter Password"
          required
        />

        {/* Location */}
        <input
          type="text"
          name="Location"
          value={register.Location}
          onChange={handleRegisterChange}
          placeholder="Enter Location"
          required
        />

        <button type="submit">Register</button>
      </form>

      {/* Message */}
      {message && (
        <p className={messageType === "success" ? "success" : "error"}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Registration;
