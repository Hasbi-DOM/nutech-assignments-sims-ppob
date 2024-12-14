import { useEffect, useState } from "react";
import instance from "../services/axiosConfig";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await instance.get(url);
      setData(result.data);
    } catch (error) {
      setError(error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => fetchData();
  return { data, loading, error, refetch };
};

export default useFetch;
