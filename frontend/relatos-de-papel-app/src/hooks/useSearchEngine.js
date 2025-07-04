import { useState, useEffect } from "react";

const API_BASE = "https://gateway-production-e4a9.up.railway.app/ms-books-catalogue/api/v1/books";

export function useSearchEngine(query) {
  const [sugerencias, setSugerencias] = useState([]);
  const [correcciones, setCorrecciones] = useState([]); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setSugerencias([]);
      setCorrecciones([]);
      return;
    }

    const timeout = setTimeout(() => {
        setLoading(true);

    Promise.all([
        fetch(API_BASE + "/suggest?q=" + encodeURIComponent(query)).then((res) => res.ok ? res.json() : { data: [] }),
        fetch(API_BASE + "/correct?q=" +encodeURIComponent(query)).then((res) => res.ok ? res.json() : { data: [] })
      ])
        .then(([suggestData, correctData]) => {
          setSugerencias(suggestData.data || []);
          setCorrecciones(correctData.data || []);
        })
        .catch((err) => {
          console.error("Error en la búsqueda:", err);
          setSugerencias([]);
          setCorrecciones([]);
        })
        .finally(() => setLoading(false));
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  return { sugerencias, correcciones, loading };
}
