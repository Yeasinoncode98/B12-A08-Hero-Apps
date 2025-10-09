import React from "react";
import pageNotFound from "../assets/error-404.png";
import { Link } from "react-router";

// Page not found works from here
const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-5 text-center px-4">
      <img
        src={pageNotFound}
        alt="Page Not Found"
        className="max-w-md w-full"
      />
      <h1 className="text-4xl font-bold">Oops, page not found!</h1>
      <p>The page you are looking for is not available.</p>
      <Link
        to={"/"}
        className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-40 h-12"
      >
        Go Back
      </Link>
    </div>
  );
};

export default PageNotFound;
