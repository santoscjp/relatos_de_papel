import React, {useContext} from 'react';
import { ContextoBusqueda } from '../../context/ContextoBusqueda';
import { Form, FormControl } from 'react-bootstrap';

const Busqueda = () => {
    const {setCadenaFiltro} = useContext(ContextoBusqueda);
    const handleChange = (e) => {
        setCadenaFiltro(e.target.value.toLowerCase());
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