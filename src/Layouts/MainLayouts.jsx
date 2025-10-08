import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "../Componants/Navbar";
import { Outlet } from "react-router";
import Footer from "../Componants/Footer";

const MainLayouts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayouts;
