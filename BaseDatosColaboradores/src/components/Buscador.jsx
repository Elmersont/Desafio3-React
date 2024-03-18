import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

const Buscador = ({ onBuscar }) => {
    const [termino, setTermino] = useState('');

    const handleChange = (e) => {
      setTermino(e.target.value);
      onBuscar(e.target.value);
    };
  
    return(
        <>
            <Form.Group className="mb-3" controlId="buscar" >
                <Form.Control 
                type="text"
                className="form-control"
                placeholder="Buscar colaborador..."
                value={termino}
                onChange={handleChange}/>
            </Form.Group>
        </>
    )
}

export default Buscador