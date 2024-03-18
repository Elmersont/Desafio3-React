import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import {useState} from 'react'

const Formulario = ({ onAgregarColaborador, onAlerta }) => {
    const [nuevoColaborador, setNuevoColaborador] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: ''
    });

    const [campoVacio, setCampoVacio] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target;
        setNuevoColaborador(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (Object.values(nuevoColaborador).some(value => value === '')) {
            setCampoVacio(true);
            onAlerta('Completa todos los campos.', 'danger');   
            return;
        }

        if (parseInt(nuevoColaborador.edad) <= 18) {
            onAlerta('El colaborador debe ser mayor de 18 años.', 'danger');
            return;
        }

        if (!/^\d{8}$/.test(nuevoColaborador.telefono)) {
            onAlerta('El teléfono debe contener 8 números.', 'danger');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(nuevoColaborador.correo)) {
            onAlerta('El formato de email no es válido.', 'danger');
            return;
        }

        onAgregarColaborador(nuevoColaborador);
        setNuevoColaborador({
            nombre: '',
            correo: '',
            edad: '',
            cargo: '',
            telefono: ''
        });
        setCampoVacio(false);
        onAlerta('Colaborador agregado exitosamente.', 'success');
    };

    return (
        <> 
        <div className='p-4'>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nombre" className="m-4">
                <Form.Control type="text" name="nombre" value={nuevoColaborador.nombre} onChange={handleChange} placeholder='Nombre del colaborador' />
            </Form.Group>
            <Form.Group controlId="correo" className="m-4">
                <Form.Control type="email" name="correo" value={nuevoColaborador.correo} onChange={handleChange} placeholder='Email del colaborador' />
            </Form.Group>
            <Form.Group controlId="edad" className="m-4">
                <Form.Control type="number" name="edad" value={nuevoColaborador.edad} onChange={handleChange} placeholder='Edad del colaborador'/>
            </Form.Group>
            <Form.Group controlId="cargo" className="m-4">
                <Form.Control type="text" name="cargo" value={nuevoColaborador.cargo} onChange={handleChange} placeholder='Cargo del colaborador' />
            </Form.Group>
            <InputGroup className="mb-3 mx-4" style={{ width: '85%' }}>
                <InputGroup.Text id="basic-addon1">+569</InputGroup.Text>
                <Form.Control type="tel" name="telefono" value={nuevoColaborador.telefono} onChange={handleChange} placeholder='Teléfono del colaborador'/>
            </InputGroup>
        
            <Button variant="success" type="submit" className="m-4" style={{ width: '85%' }}>
                Agregar
            </Button>
        </Form>    
            
        
        </div>      
        
    
        </>
 
    );
};

export default Formulario;
