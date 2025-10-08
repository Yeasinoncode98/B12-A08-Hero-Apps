// import React, { useState } from "react";
// import downloadIcon from "../assets/icon-downloads.png";
// import ratingIcon from "../assets/icon-ratings.png";
// import likeIcon from "../assets/icon-review.png";
// import { addInstallData, getStoredData } from "../Utils/LocalStrog";

// const DetailesCard = ({ findData }) => {
//   const { id, image, title, companyName, ratingAvg, size, downloads, reviews } =
//     findData;
//   const alreadyInstalled = getStoredData().includes(id);
//   const [isInstalled, setIsInstalled] = useState(alreadyInstalled);

//   const handleAddData = (id, appTitle) => {
//     addInstallData(id);
//     setIsInstalled(true);

//     const toast = document.createElement("div");
//     toast.className = "alert alert-success fixed top-15 z-50 shadow-lg";
//     toast.style.left = "50%";
//     toast.style.transform = "translateX(-50%)";
//     toast.style.width = "384px";
//     toast.innerHTML = `
//       <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
//         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//       <span><strong>${appTitle}</strong> installed successfully!</span>
//     `;
//     document.body.appendChild(toast);
//     setTimeout(() => toast.remove(), 3000);
//   };

//   return (
//     <div className="bg-base-200 p-5 min-h-[350px]">
//       <div className="flex items-start max-sm:flex-col max-sm:items-center">
//         {/* App Image */}
//         <figure className="h-[350px] w-[350px] p-10 overflow-hidden flex justify-center">
//           <img src={image} alt={title} className="rounded-xl object-cover" />
//         </figure>

//         <div className="mt-5 max-sm:text-center max-sm:w-full max-sm:px-5">
//           {/* Title and Company */}
//           <h1 className="text-2xl font-bold">{title}</h1>
//           <h1 className="font-semibold mb-7 mt-2">
//             Developed by{" "}
//             <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
//               {companyName}
//             </span>
//           </h1>

//           {/* Stats */}
//           <div className="flex justify-between max-sm:flex-col max-sm:items-center max-sm:space-y-5 border-t border-gray-300 pt-6  ">
//             <div className="flex flex-col items-center space-y-1">
//               <img className="h-[40px] w-[40px]" src={downloadIcon} alt="" />
//               <h1>Downloads</h1>
//               <h1 className="font-bold text-3xl">{downloads}</h1>
//             </div>
//             <div className="flex flex-col items-center space-y-1">
//               <img className="h-[40px] w-[40px]" src={ratingIcon} alt="" />
//               <h1>Average Ratings</h1>
//               <h1 className="font-bold text-3xl">{ratingAvg}</h1>
//             </div>
//             <div className="flex flex-col items-center space-y-1">
//               <img className="h-[40px] w-[40px]" src={likeIcon} alt="" />
//               <h1>Total Reviews</h1>
//               <h1 className="font-bold text-3xl">{reviews}</h1>
//             </div>
//           </div>

//           {/* Install Button */}
//           <div className="mt-5 flex justify-center">
//             <button
//               onClick={() => handleAddData(id, title)}
//               disabled={isInstalled}
//               className={`btn text-white ${
//                 isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390]"
//               }`}
//             >
//               {isInstalled ? "Already Installed" : `Install Now (${size} MB)`}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailesCard;

//....................

import React, { useState } from "react";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import likeIcon from "../assets/icon-review.png";
import { addInstallData, getStoredData } from "../Utils/LocalStrog";

const DetailesCard = ({ findData }) => {
  const { id, image, title, companyName, ratingAvg, size, downloads, reviews } =
    findData;
  const alreadyInstalled = getStoredData().includes(id);
  const [isInstalled, setIsInstalled] = useState(alreadyInstalled);

  const handleAddData = (id, appTitle) => {
    addInstallData(id);
    setIsInstalled(true);

    const toast = document.createElement("div");
    toast.className = "alert alert-success fixed top-15 z-50 shadow-lg";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.width = "384px";
    toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span><strong>${appTitle}</strong> installed successfully!</span>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  };

  return (
    <div className="bg-base-200 p-5 min-h-[350px]">
      <div className="flex items-start max-sm:flex-col max-sm:items-center">
        {/* App Image */}
        <figure className="h-[400px] w-[400px] p-10 overflow-hidden flex justify-center">
          <img src={image} alt={title} className="rounded-xl object-cover" />
        </figure>

        <div className="mt-8 max-sm:text-center max-sm:w-full max-sm:px-5">
          {/* Title and Company */}
          <h1 className="text-2xl font-bold">{title}</h1>
          <h1 className="font-semibold mb-2 mt-2">
            Developed by{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {companyName}
            </span>
          </h1>

          {/* Responsive Divider Line */}
          <div className="border-t border-gray-300 w- lg:w-[185%] mx-auto mb-6 mt-9"></div>

          {/* Stats */}
          <div className="flex justify-between w-full max-sm:flex-col max-sm:items-center max-sm:space-y-5 pt-6">
            {/* Downloads + Install Button */}
            <div className="flex flex-col items-center lg:items-start lg:mr-10 space-y-1">
              <img className="h-[40px] w-[40px]" src={downloadIcon} alt="" />
              <h1>Downloads</h1>
              <h1 className="font-bold text-3xl">{downloads}</h1>

              {/* Install button under Downloads for large screens */}
              <div className="mt-5 lg:block hidden">
                <button
                  onClick={() => handleAddData(id, title)}
                  disabled={isInstalled}
                  className={`btn text-white ${
                    isInstalled
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#00D390]"
                  }`}
                >
                  {isInstalled
                    ? "Already Installed"
                    : `Install Now (${size} MB)`}
                </button>
              </div>
            </div>

            {/* Average Ratings */}
            <div className="flex flex-col items-center lg:items-start lg:mx-10 space-y-1">
              <img className="h-[40px] w-[40px]" src={ratingIcon} alt="" />
              <h1>Average Ratings</h1>
              <h1 className="font-bold text-3xl">{ratingAvg}</h1>
            </div>

            {/* Total Reviews */}
            <div className="flex flex-col items-center lg:items-start lg:ml-10 space-y-1">
              <img className="h-[40px] w-[40px]" src={likeIcon} alt="" />
              <h1>Total Reviews</h1>
              <h1 className="font-bold text-3xl">{reviews}</h1>
            </div>
          </div>

          {/* Original Install button centered for mobile/tablet */}
          <div className="mt-5 flex justify-center lg:hidden">
            <button
              onClick={() => handleAddData(id, title)}
              disabled={isInstalled}
              className={`btn text-white ${
                isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390]"
              }`}
            >
              {isInstalled ? "Already Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailesCard;
