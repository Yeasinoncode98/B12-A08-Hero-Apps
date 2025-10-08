import React from "react";
import pageNotFound from "../assets/error-404.png";
import { Link } from "react-router";
const PageNotFound = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center space-y-5 text-center">
      <img src={pageNotFound} alt="" />
      <h1 className="text-4xl font-bold">OPPS, page not found!</h1>
      <p>The page you are looking for is not available.</p>
      <Link
        to={"/"}
        className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-40 h-12"
      >
        {" "}
        Go Back
      </Link>
    </div>
  );
};

export default PageNotFound;
