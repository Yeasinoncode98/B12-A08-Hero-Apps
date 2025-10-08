import { useEffect, useState } from "react";
import axios from "axios";

export const useAppApi = () => {
  const [app, setApp] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppData = async () => {
      try {
        const res = await axios.get("../AppData.json");
        setApp(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppData();
  }, []);

  return { app, loading, error };
};
