// import React from "react";

// import downloadIcon from "../assets/icon-downloads.png";
// import ratingIcon from "../assets/icon-ratings.png";
// import { useNavigate } from "react-router";

// const HomeProduct = ({ data }) => {
//   const navigate = useNavigate();

//   return (
//     <div onClick={() => navigate(`/detailes/${data.id}`)}>
//       <div className="card bg-base-100 shadow-sm">
//         <figure className="px-5 pt-5 h-[186px] overflow-hidden">
//           <img
//             src={data.image}
//             alt="Shoes"
//             className="rounded-xl object-cover w-30"
//           />
//         </figure>
//         <div className="card-body">
//           <h2 className="text-xl font-bold">{data.title}</h2>

//           <div className="flex justify-between space-x-35 w-full mt-3">
//             <p className="text-green-400 flex justify-center border rounded  items-center">
//               <img className="h-[17px]" src={downloadIcon} alt="" />{" "}
//               {data.downloads}
//             </p>
//             <p className="text-orange-400 flex justify-center items-center border rounded">
//               <img className="h-[17px]" src={ratingIcon} alt="" />{" "}
//               {data.ratingAvg}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeProduct;
