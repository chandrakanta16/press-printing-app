import React, { useState } from "react";
import "./Admin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export default function AdminLogin() {

  const [adminData, setAdminData] = useState({
    email: "",
    password: "",
  });

  // use navigate 
  const navigate =
    useNavigate();

  const handleChange = (e) => {

    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

      
        const res = await axios.post(

          `${import.meta.env.VITE_API_URL}/api/admin/login`,
          adminData
        );


        alert(res.data.message);
        localStorage.setItem(
          "adminAuth",
          "true"
        );
        navigate("/dashboard");
      } catch (error) {
        alert(
          "Invalid Email or Password"
        );
        console.log(error);
      }

    };

  return (

    <div className="adminLogin_wrapper">

      <div className="adminLogin_container">

        {/* Left Section */}
        <div className="adminLogin_left">

          <div className="adminLogin_overlay"></div>

          <div className="adminLogin_content">

            <h1>Maa Santosi Computer</h1>

            <p>
              Secure admin dashboard for managing
              customer messages, services and printing data.
            </p>

          </div>

        </div>

        {/* Right Section */}
        <div className="adminLogin_right">

          <form
            className="adminLogin_form"
            onSubmit={handleSubmit}
          >

            <h2>Admin Login</h2>

            <p>
              Login to access dashboard
            </p>

            <div className="adminLogin_inputBox">

              <input
                type="email"
                name="email"
                placeholder="Admin Email"
                value={adminData.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="adminLogin_inputBox">

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={adminData.password}
                onChange={handleChange}
                required
              />

            </div>

            <button type="submit">
              Login
            </button>

          </form>

        </div>

      </div>

    </div>

  );
}