import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomAlert from './components/Alert';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import { BaseColaboradores } from './components/BaseColaboradores';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState('');
  const [color, setColor] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const handleAgregarColaborador = nuevoColaborador => {
    setColaboradores([...colaboradores, { id: colaboradores.length + 1, ...nuevoColaborador }]);
  }
    

  const handleEliminarColaborador = id => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  };

  const handleBuscar = termino => {
    setBusqueda(termino);
  };

  const handleAlerta = (mensaje, color) => {
    setMensaje(mensaje);
    setColor(color);
  };

  const colaboradoresFiltrados = colaboradores.filter(colaborador => {
    return (
      colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase())
    );
  });

  return (
    <>
      <h1>Lista de Colaboradores</h1>
      <Buscador onBuscar={handleBuscar} />
      <Listado colaboradores={colaboradoresFiltrados} eliminarColaborador={handleEliminarColaborador} />
      <h1>Agregar colaborador</h1>
      <Formulario onAgregarColaborador={handleAgregarColaborador} onAlerta={handleAlerta}/>
      {mensaje && <CustomAlert mensaje={mensaje} color={color} />}
    </>
  );
}
export default App;
