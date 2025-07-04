// src/components/SearchBar/SearchBar.jsx
import { FormControl } from "react-bootstrap";
import { useSearch } from "../../hooks/useSearch";
import { useState } from "react";
import { useSearchEngine } from "../../hooks/useSearchEngine";
import "../../styles/searchbar.css";

const SearchBar = () => {
  const { setSearchQuery } = useSearch();
  const [localQuery, setLocalQuery] = useState("");
  const { sugerencias, correcciones, loading } = useSearchEngine(localQuery);

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalQuery(value);
    setSearchQuery(value.toLowerCase()); // mantiene compatibilidad
  };

  const handleSelect = (text) => {
    setLocalQuery(text);
    setSearchQuery(text.toLowerCase());
  };

  return (
    <div className="searchbar-container w-100">
      <FormControl
        type="search"
        placeholder="Título, Autor, ISBN..."
        className="me-2"
        aria-label="Buscar"
        onChange={handleChange}
        value={localQuery}
      />

      {(sugerencias.length > 0 || correcciones.length > 0 || loading) && (
        <ul className="searchbar-dropdown">
          {loading && <li className="searchbar-item muted">Buscando...</li>}
          {correcciones.map((c, i) => (
            <li key={"c" + i} className="searchbar-item correction" onClick={() => handleSelect(c)}>
              ¿Quisiste decir <strong>{c}</strong>?
            </li>
          ))}
          {sugerencias.map((s, i) => (
            <li key={"s" + i} className="searchbar-item" onClick={() => handleSelect(s)}>
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
