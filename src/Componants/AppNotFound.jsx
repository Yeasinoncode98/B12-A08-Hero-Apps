import React from "react";
import appFound from "../assets/App-Error.png";
import { Link, useNavigate } from "react-router";

const AppNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-5 text-center">
      <img src={appFound} alt="" />
      <h1 className="text-4xl font-bold">OOPS!! APP NOT FOUND</h1>
      <p>
        The App you are requesting is not found on our system. Please try
        another apps
      </p>
      <button
        onClick={() => navigate("/")}
        className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-40 h-12"
      >
        Go Back
      </button>
    </div>
  );
};

export default AppNotFound;


