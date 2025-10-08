import React from "react";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";

const InstallCard = ({ data, handleRemove }) => {
  return (
    <div className="p-4 bg-white flex justify-between items-center rounded-lg shadow-sm mt-[50px] mb-[50px]">
      <div className="flex items-center space-x-4">
        <img
          className="w-12 h-12 rounded-md object-cover"
          src={data.image}
          alt={data.title}
        />
        <div className="space-y-1">
          <h1 className="font-semibold text-gray-900">{data.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <img className="h-4 w-4" src={downloadIcon} alt="" />
              <p className="text-[#00D390] font-medium">{data.downloads}</p>
            </div>
            <div className="flex items-center space-x-1">
              <img className="h-4 w-4" src={ratingIcon} alt="" />
              <p className="text-orange-500 font-medium">{data.ratingAvg}</p>
            </div>
            <div>
              <p className="text-gray-600">{data.size} MB</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleRemove(data.id, data.title)}
          className="px-6 py-2 bg-[#00D390] text-white rounded-md font-medium hover:bg-[#00bd7e] transition-colors"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallCard;
