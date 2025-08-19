import React from "react";
import { useNavigate } from "react-router";
import MyBarChart from "./MyBarChart";
import GitHubBarChart from "./GitHubBarChart";
import SideNav from "../Dashboard/SideNav";
import axios from "axios";
import SocialChart from "./SocialChart";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="overflow-x-hidden justify-center text-center bg-gradient-to-bl from-sky-500 via-purple-200 to-indigo-700 text-2xl font-serif py-6 ">
        {/* <SideNav /> */}
        <h1 className="text-blue-600 my-2">
          Hello! {sessionStorage.getItem("name")}
        </h1>
        <h3 className="text-gray-600 mb-10">Welcome to your Admin Dashboard</h3>

        <div className="h-auto w-max justify-center text-center align-center m-auto">
          <MyBarChart />
          <SocialChart />
          <GitHubBarChart />
        </div>

        <button
          className="bg-blue-500 text-white px-6 py-1 rounded-md my-4 hover:bg-blue-600"
          onClick={() => {
            sessionStorage.clear();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Dashboard;
