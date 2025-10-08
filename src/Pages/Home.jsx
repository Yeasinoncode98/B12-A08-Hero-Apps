import React from "react";
import Hero from "../Componants/Hero";
import HomeProduct from "../Componants/HomeProduct";
import { useAppApi } from "../Hooks/useAppAPi";
import { Link } from "react-router";

const Home = () => {
  const { app, loading } = useAppApi();

  const homeData = app.slice(0, 8);

  return (
    <div className="">
      <Hero></Hero>
      <div className="mt-[70px] space-y-3">
        <h1 className="font-bold text-4xl text-center">Trending Apps</h1>
        <p className="text-gray-400 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-sm:p-5 gap-5 max-w-7xl mx-auto mt-10">
          {homeData.map((data) => (
            <HomeProduct key={data.id} data={data}></HomeProduct>
          ))}
        </div>
      )}

      <div className="flex  justify-center items-center">
        <Link
          to={"/allapps"}
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-40 mt-[40px] h-12 mb-10"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
