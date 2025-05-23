 import { useSearch } from '../../hooks/useSearch';
import { Form, FormControl } from 'react-bootstrap';

const SearchBar = () => {
    const { setSearchQuery } = useSearch();
    const handleChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    return (
        <Form className="d-flex mx-auto w-50">
            <FormControl
              type="search"
              placeholder="Título, Autor, ISBN..."
              className="me-2"
              aria-label="Buscar"
              onChange={handleChange}
            />
          </Form>
    );
};

export default SearchBar;