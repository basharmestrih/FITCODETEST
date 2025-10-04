import { useEffect, useState } from "react";
import { ApiResponse, StatItem } from "../../../lib/models/diestdata_model.tsx";

export const useStats = () => {
  const [stats, setStats] = useState<StatItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("https://api.fitcode.life/api/v1/test/data-1");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json: ApiResponse = await res.json();

        if (json.success) {
          setStats(json.data);
        } else {
          throw new Error("API returned unsuccessful response");
        }
      } catch (err: unknown) {
        console.error("Failed to fetch stats:", err);

        // Narrow unknown to Error to safely access message
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading, error };
};
