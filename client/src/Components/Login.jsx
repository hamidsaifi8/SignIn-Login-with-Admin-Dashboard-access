import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3006/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.message === "Login successful") {
          sessionStorage.setItem("name", res.data.user.name);
          navigate("/dashboard");
        } else {
          alert(res.data.message || "Login failed");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="text-gray-600 body-font" onSubmit={handleSubmit}>
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-black text-lg font-medium title-font mb-5 text-center">
              Login
            </h2>

            <div className="relative mb-4">
              <label
                htmlFor="username"
                className="leading-7 text-sm text-gray-600"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Sign Up
            </button>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Don't have account?
              <Link to="/register">SignUp</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
