// import { useEffect, useState } from "react";
// import InstallCard from "../Componants/InstallCard";
// import { useAppApi } from "../Hooks/useAppAPi";
// import { getStoredData, removeFromStoreData } from "../Utils/LocalStrog";
// import { ArrowDown } from "lucide-react";

// const Installtion = () => {
//   const [sortItem, setSortItem] = useState("");

//   const { app } = useAppApi();

//   const [installedIds, setInstalledIds] = useState([]);

//   console.log(app);
//   useEffect(() => {
//     setInstalledIds(getStoredData());
//   }, []);

//   const data = getStoredData();
//   const matchedData = app?.filter((item) => data.includes(item.id)) || [];

//   const handleRemove = (id, appTitle) => {
//     removeFromStoreData(id);
//     const remainingIds = installedIds.filter((currentId) => currentId !== id);
//     setInstalledIds(remainingIds);

//     // Show toast notification
//     const toast = document.createElement("div");
//     toast.className = "alert alert-error fixed top-5 z-50 shadow-lg";
//     toast.style.left = "50%";
//     toast.style.transform = "translateX(-50%)";
//     toast.style.width = "384px";
//     toast.innerHTML = `
//       <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
//         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//       <span><strong>${appTitle}</strong> uninstalled successfully!</span>
//     `;

//     document.body.appendChild(toast);

//     // Remove toast after 3 seconds
//     setTimeout(() => {
//       toast.remove();
//     }, 3000);
//   };

//   const sortOrder = () => {
//     if (sortItem === "asc") {
//       return [...matchedData].sort((a, b) => a.size - b.size);
//     } else if (sortItem === "dsc") {
//       return [...matchedData].sort((a, b) => b.size - a.size);
//     } else {
//       return matchedData;
//     }
//   };

//   return (
//     <div className="max-w-[1440px] mx-auto max-sm:p-3">
//       <div className="mt-[70px] space-y-3">
//         <h1 className="font-bold text-4xl text-center">Your Installed Apps</h1>
//         <p className="text-gray-400 text-center max-sm:mb-3">
//           Explore All Trending Apps on the Market developed by us
//         </p>
//       </div>

//       <div>
//         <div className="flex justify-between">
//           <h1 className="font-bold text-2xl">
//             {matchedData.length} Apps Found
//           </h1>
//           <label className="form-control w-full max-w-xs">
//             <select
//               className="select select-bordered"
//               value={sortItem}
//               onChange={(e) => setSortItem(e.target.value)}
//             >
//               <option value="none">Sort by Downlods</option>
//               <option value="asc">Low to High</option>
//               <option value="dsc">High to Low</option>
//             </select>
//           </label>
//         </div>
//         {matchedData.length === 0 && (
//           <h1 className="font-bold text-4xl text-center mt-20">
//             NO APP INSTALLED
//           </h1>
//         )}

//         {sortOrder().map((data) => (
//           <InstallCard
//             handleRemove={handleRemove}
//             key={data.id}
//             data={data}
//           ></InstallCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Installtion;

//......

// import { useEffect, useState } from "react";
// import InstallCard from "../Componants/InstallCard";
// import { useAppApi } from "../Hooks/useAppAPi";
// import { getStoredData, removeFromStoreData } from "../Utils/LocalStrog";
// import { ArrowDown } from "lucide-react";

// const Installtion = () => {
//   const [sortItem, setSortItem] = useState("none");

//   const { app } = useAppApi();

//   const [installedIds, setInstalledIds] = useState([]);

//   console.log(app);
//   useEffect(() => {
//     setInstalledIds(getStoredData());
//   }, []);

//   const data = getStoredData();
//   const matchedData = app?.filter((item) => data.includes(item.id)) || [];

//   const handleRemove = (id, appTitle) => {
//     removeFromStoreData(id);
//     const remainingIds = installedIds.filter((currentId) => currentId !== id);
//     setInstalledIds(remainingIds);

//     // Show toast notification
//     const toast = document.createElement("div");
//     toast.className = "alert alert-error fixed top-15 z-50 shadow-lg";
//     toast.style.left = "50%";
//     toast.style.transform = "translateX(-50%)";
//     toast.style.width = "384px";
//     toast.innerHTML = `
//       <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
//         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//       <span><strong>${appTitle}</strong> uninstalled successfully!</span>
//     `;

//     document.body.appendChild(toast);

//     // Remove toast after 3 seconds
//     setTimeout(() => {
//       toast.remove();
//     }, 3000);
//   };

//   const sortOrder = () => {
//     if (sortItem === "low") {
//       // Low to High (ascending by size)
//       return [...matchedData].sort((a, b) => Number(a.size) - Number(b.size));
//     } else if (sortItem === "high") {
//       // High to Low (descending by size)
//       return [...matchedData].sort((a, b) => Number(b.size) - Number(a.size));
//     } else {
//       return matchedData;
//     }
//   };

//   return (
//     <div className="max-w-[1420px] mx-auto max-sm:p-3">
//       <div className="mt-[70px] space-y-3">
//         <h1 className="font-bold text-4xl text-center">Your Installed Apps</h1>
//         <p className="text-gray-400 text-center max-sm:mb-3">
//           Explore All Trending Apps on the Market developed by us
//         </p>
//       </div>

//       <div>
//         <div className="flex justify-between">
//           <h1 className="font-bold text-2xl">
//             {matchedData.length} Apps Found
//           </h1>
//           <label className="form-control w-full max-w-xs outline-0">
//             <select
//               className="select select-bordered outline-none "
//               value={sortItem}
//               onChange={(e) => setSortItem(e.target.value)}
//             >
//               <option value="none">Sort by Size</option>
//               <option value="high">High to Low</option>
//               <option value="low">Low to High</option>
//             </select>
//           </label>
//         </div>
//         {matchedData.length === 0 && (
//           <h1 className="font-bold text-4xl text-center mt-20">
//             NO APP INSTALLED
//           </h1>
//         )}

//         {sortOrder().map((data) => (
//           <InstallCard
//             handleRemove={handleRemove}
//             key={data.id}
//             data={data}
//           ></InstallCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Installtion;

//.......

import { useEffect, useState } from "react";
import InstallCard from "../Componants/InstallCard";
import { useAppApi } from "../Hooks/useAppAPi";
import { getStoredData, removeFromStoreData } from "../Utils/LocalStrog";
import { ArrowDown } from "lucide-react";

const Installtion = () => {
  const [sortItem, setSortItem] = useState("none");

  const { app } = useAppApi();

  const [installedIds, setInstalledIds] = useState([]);

  console.log(app);
  useEffect(() => {
    setInstalledIds(getStoredData());
  }, []);

  const data = getStoredData();
  const matchedData = app?.filter((item) => data.includes(item.id)) || [];

  const handleRemove = (id, appTitle) => {
    removeFromStoreData(id);
    const remainingIds = installedIds.filter((currentId) => currentId !== id);
    setInstalledIds(remainingIds);

    // Show toast notification
    const toast = document.createElement("div");
    toast.className = "alert alert-error fixed top-15 z-50 shadow-lg";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.width = "384px";
    toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span><strong>${appTitle}</strong> uninstalled successfully!</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  const parseDownloads = (downloads) => {
    if (!downloads) return 0;
    const numStr = downloads.replace(/[^0-9.]/g, "");
    const num = parseFloat(numStr);
    if (downloads.includes("B")) return num * 1000000000;
    if (downloads.includes("M")) return num * 1000000;
    if (downloads.includes("K")) return num * 1000;
    return num;
  };

  const sortOrder = () => {
    if (sortItem === "downloads-low") {
      // Low to High (ascending by downloads)
      return [...matchedData].sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    } else if (sortItem === "downloads-high") {
      // High to Low (descending by downloads)
      return [...matchedData].sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    } else {
      return matchedData;
    }
  };

  return (
    <div className="max-w-[1420px] mx-auto max-sm:p-3">
      <div className="mt-[70px] space-y-3">
        <h1 className="font-bold text-4xl text-center">Your Installed Apps</h1>
        <p className="text-gray-400 text-center max-sm:mb-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div>
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">
            {matchedData.length} Apps Found
          </h1>
          <label className="form-control w-full max-w-xs outline-0">
            <select
              className="select select-bordered outline-none "
              value={sortItem}
              onChange={(e) => setSortItem(e.target.value)}
            >
              <option value="none">Sort by Downloads</option>
              <option value="downloads-high">High to Low</option>
              <option value="downloads-low">Low to High</option>
            </select>
          </label>
        </div>
        {matchedData.length === 0 && (
          <h1 className="font-bold text-4xl text-center mt-20">
            NO APP INSTALLED
          </h1>
        )}

        {sortOrder().map((data) => (
          <InstallCard
            handleRemove={handleRemove}
            key={data.id}
            data={data}
          ></InstallCard>
        ))}
      </div>
    </div>
  );
};

export default Installtion;
