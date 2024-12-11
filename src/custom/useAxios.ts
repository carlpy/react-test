import { useState, useEffect } from "react";
import axios from "axios";

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
  data: Data<T>  | null;
  loading: boolean;
  error: Error | null;
}

export function useAxios<T>(url: string): Params<T> {
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const response = await axios.get(url);
        if (!response) {
          throw new Error("Error fetching the data");
        }
        setData(response.data);
      } catch (e) {
        setError(e as ErrorType);
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}
