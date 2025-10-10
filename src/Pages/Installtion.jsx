import { useEffect, useState } from "react";
import InstallCard from "../Componants/InstallCard";
import { useAppApi } from "../Hooks/useAppAPi";
import { getStoredData, removeFromStoreData } from "../Utils/LocalStrog";
import { ArrowDown } from "lucide-react";

const Installtion = () => {
  const [sortItem, setSortItem] = useState("none");
  const [installedIds, setInstalledIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { app, loading } = useAppApi();

  console.log(app);

  useEffect(() => {
    setInstalledIds(getStoredData());
  }, []);

  // Delay to make spinner visible longer

  useEffect(() => {
    if (loading) return;
    let timer;

    setIsLoading(true);
    timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [loading]);

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

  // Show loading spinner
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen ">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-[1420px] mx-auto max-sm:p-3">
      <div className="mt-[70px] space-y-3">
        <h1 className="font-bold text-4xl text-center">Your Installed Apps</h1>
        <p className="text-gray-400 text-center max-sm:mb-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <h1 className="font-bold text-2xl text-center sm:text-left">
            {matchedData.length} Apps Found
          </h1>

          <label className="form-control w-full max-w-xs sm:max-w-[200px]">
            <select
              className="select select-bordered outline-none w-full"
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
