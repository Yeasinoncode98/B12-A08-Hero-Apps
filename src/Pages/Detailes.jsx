import React from "react";

import { useParams } from "react-router";
import { useAppApi } from "../Hooks/useAppAPi";
import DetailesCard from "../Componants/DetailesCard";
import RatingChart from "../Componants/RatingChart";

const Detailes = () => {
  const { id } = useParams();

  const { app } = useAppApi();

  const findData = app.find((data) => data.id === Number(id));

  if (!findData) {
    return <p className="text-center p-10">Loading...</p>;
  }

  const ratingData = findData.ratings;

  console.log(ratingData);
  return (
    <div className="max-w-[1440px] mx-auto">
      <DetailesCard findData={findData}></DetailesCard>

      {/* bar chat  */}
      <div className="mt-10 border-t pt-5 border-gray-300 mb-7 max-sm:px-2">
        <h1 className="font-bold text-2xl">Ratings</h1>
        <RatingChart ratingData={ratingData}></RatingChart>
      </div>

      {/* description  */}
      <div className="border-t pt-5 border-gray-300 max-sm:px-3">
        <h1 className="font-bold text-2xl">Description</h1>

        <p className="text-gray-500 mt-4 mb-10">{findData.description}</p>
      </div>
    </div>
  );
};

export default Detailes;
