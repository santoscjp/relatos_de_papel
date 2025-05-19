import { useSearch } from '../../context/SearchContext';
import { Form, FormControl } from 'react-bootstrap';

const Busqueda = () => {
    const { setSearchQuery } = useSearch();
    const handleChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    return (
        <Form className="d-flex mx-auto" style={{ maxWidth: 400, flex: 1 }}>
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

export default Busqueda;