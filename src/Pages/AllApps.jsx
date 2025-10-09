import React, { useEffect, useState } from "react";
import { useAppApi } from "../Hooks/useAppAPi";
import HomeProduct from "../Componants/HomeProduct";
import AppNotFound from "../Componants/AppNotFound";

const AllApps = () => {
  const { app, loading } = useAppApi();

  const [searchValue, setSearchValue] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (app) {
      setFilteredApps(app);
    }
  }, [app]);

  useEffect(() => {
    setIsSearching(true);

    const timer = setTimeout(() => {
      const searchNormalized = searchValue
        .trim()
        .toLowerCase()
        .replace(/\s+/g, ""); // remove all spaces

      if (searchNormalized) {
        const searchResult = app.filter((data) =>
          data.title
            .toLowerCase()
            .replace(/\s+/g, "") // remove all spaces
            .includes(searchNormalized)
        );
        setFilteredApps(searchResult);
      } else {
        setFilteredApps(app || []);
      }
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue, app]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen mt-[50px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="bg-[#f9f9f9] min-h-screen py-10">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="mt-[70px] space-y-3 text-center">
          <h1 className="font-bold text-4xl">Our All Applications</h1>
          <p className="text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex justify-between items-center mt-6 max-sm:flex-col max-sm:gap-3">
          <h1 className="font-bold">({filteredApps.length}) Apps Found</h1>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="input font-semibold max-sm:w-full"
            type="search"
            placeholder="Search Product"
          />
        </div>

        {isSearching ? (
          <div className="flex justify-center items-center mt-10">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ) : filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {filteredApps.map((data) => (
              <HomeProduct data={data} key={data.id} />
            ))}
          </div>
        ) : (
          <AppNotFound />
        )}
      </div>
    </div>
  );
};

export default AllApps;
