

import React from "react";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";

const InstallCard = ({ data, handleRemove }) => {
  return (
    <div className="p-4 bg-white flex flex-wrap justify-between items-center rounded-lg shadow-sm mt-[50px] mb-[50px] gap-4">
      {/* Left side */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <img
          className="w-12 h-12 rounded-md object-cover flex-shrink-0"
          src={data.image}
          alt={data.title}
        />

        <div className="space-y-1 min-w-0">
          <h1 className="font-semibold text-gray-900 truncate">{data.title}</h1>

          {/* Info row */}
          <div className="flex items-center gap-4 min-w-0 flex-nowrap overflow-hidden text-sm text-gray-600">
            <div className="flex items-center gap-1 shrink-0">
              <img className="h-4 w-4" src={downloadIcon} alt="" />
              <p className="text-[#00D390] font-medium">{data.downloads}</p>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <img className="h-4 w-4" src={ratingIcon} alt="" />
              <p className="text-orange-500 font-medium">{data.ratingAvg}</p>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <p className="text-gray-600 whitespace-nowrap">{data.size} MB</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side button */}
      <div className="flex-shrink-0 w-full sm:w-auto">
        <button
          onClick={() => handleRemove(data.id, data.title)}
          className="px-6 py-2 bg-[#00D390] text-white rounded-md font-medium hover:bg-[#00bd7e] transition-colors w-full sm:w-auto"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallCard;
