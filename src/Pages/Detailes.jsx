// import React from "react";

// import { useParams } from "react-router";
// import { useAppApi } from "../Hooks/useAppAPi";
// import DetailesCard from "../Componants/DetailesCard";
// import RatingChart from "../Componants/RatingChart";
// // import errorImage from '../assets/error-404'
// import pageNotFound from "../assets/error-404.png";

// const Detailes = () => {
//   const { id } = useParams();

//   const { app } = useAppApi();

//   const findData = app.find((data) => data.id === Number(id));

//   if (!findData) {
//     return (
//       <div className="flex flex-col justify-center items-center p-10">
//         <img src={pageNotFound} alt="Page not found" />
//         <h1 className="text-4xl font-bold mt-6">Oops, page not found!</h1>
//         <p className="mt-2">The page you are looking for is not available.</p>
//       </div>
//     );
//   }

//   const ratingData = findData.ratings;

//   console.log(ratingData);
//   return (
//     <div className="max-w-[1440px] mx-auto">
//       <DetailesCard findData={findData}></DetailesCard>

//       {/* bar chat  */}
//       <div className="mt-10 border-t pt-5 border-gray-300 mb-7 max-sm:px-2">
//         <h1 className="font-bold text-2xl">Ratings</h1>
//         <RatingChart ratingData={ratingData}></RatingChart>
//       </div>

//       {/* description  */}
//       <div className="border-t pt-5 border-gray-300 max-sm:px-3">
//         <h1 className="font-bold text-2xl">Description</h1>

//         <p className="text-gray-500 mt-4 mb-10">{findData.description}</p>
//       </div>
//     </div>
//   );
// };

// export default Detailes;

//.................

import React from "react";
import { useParams } from "react-router";
import { useAppApi } from "../Hooks/useAppAPi";
import DetailesCard from "../Componants/DetailesCard";
import RatingChart from "../Componants/RatingChart";
import pageNotFound from "../assets/error-404.png";

const Detailes = () => {
  const { id } = useParams();

  const { app, loading } = useAppApi();

  const findData = app.find((data) => data.id === Number(id));

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // Only show "not found" after loading is complete and data doesn't exist
  if (!loading && !findData) {
    return (
      <div className="flex flex-col justify-center items-center p-10 min-h-screen">
        <img src={pageNotFound} alt="Page not found" />
        <h1 className="text-4xl font-bold mt-6">Oops, page not found!</h1>
        <p className="mt-2">The page you are looking for is not available.</p>
      </div>
    );
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
