const getStoredData = () => {
  const storedInstallData = localStorage.getItem("insTall");
  if (storedInstallData) {
    return JSON.parse(storedInstallData);
  } else {
    return [];
  }
};

const addInstallData = (id) => {
  const addInstalldata = getStoredData();
  addInstalldata.push(id);
  localStorage.setItem("insTall", JSON.stringify(addInstalldata));
};

const removeFromStoreData = (id) => {
  const storedApp = getStoredData();
  const remaining = storedApp.filter((appId) => appId !== id);
  localStorage.setItem("insTall", JSON.stringify(remaining));
};

export { addInstallData, removeFromStoreData, getStoredData };
