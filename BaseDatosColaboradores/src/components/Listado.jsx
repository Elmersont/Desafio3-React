import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import React from 'react';

function Listado( {colaboradores, eliminarColaborador}) {
  if (!colaboradores || colaboradores.length === 0) {
    return <div>No hay colaboradores</div>;
  }

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th><b>Id</b></th>
            <th><b>Nombre</b></th>
            <th><b>Correo</b></th>
            <th><b>Edad</b></th>
            <th><b>Cargo</b></th>
            <th><b>Teléfono</b></th>
            <th><b>Acciones</b></th>
          </tr>
        </thead>
        <tbody>
                {colaboradores.map(colaborador => (
                    <tr key={colaborador.id}>
                        <td>{colaborador.id}</td>
                        <td>{colaborador.nombre}</td>
                        <td>{colaborador.correo}</td>
                        <td>{colaborador.edad}</td>
                        <td>{colaborador.cargo}</td>
                        <td>{colaborador.telefono}</td>
                        <td>
                            <Button variant="danger" onClick={() => eliminarColaborador(colaborador.id)}>Eliminar</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Listado;
