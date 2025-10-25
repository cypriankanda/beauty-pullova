import { useEffect, useState } from "react";

export function useGeoCountry() {
  const [country, setCountry] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const cached = localStorage.getItem("country");
        if (cached) {
          setCountry(cached);
          setLoading(false);
          return;
        }

        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data?.country_name) {
          setCountry(data.country_name);
          localStorage.setItem("country", data.country_name);
        } else {
          setCountry("Unknown");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        setCountry("Unknown");
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, []);

  return { country, loading };
}
