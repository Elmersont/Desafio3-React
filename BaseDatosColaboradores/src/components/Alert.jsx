import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

const CustomAlert = ({mensaje, color}) => {
    return (
        <>

            <Alert variant={color} className='mt-4'>

                <p className="mb-0"> {mensaje} </p>

            </Alert>  
        
        </>
      
    );
  }
  
  export default CustomAlert;