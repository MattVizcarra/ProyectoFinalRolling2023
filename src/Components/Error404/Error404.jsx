import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import error from '../../assets/ImagenesError404/imagenError404_02.jpg'
import './Error404.css'

const Error404 = () => {
    return (
      <section className="seccionPrincipal text-center mt-5">

        <img src={error} alt="error 404" className="error404-img mt-4" />
        <p className="textoError404 mt-4">Ups, la página no se encuentra disponible.</p>
          <div>
          {/* <Link to="/">
            <Button id='btn-error404'className='mb-5'>Volver al inicio</Button>
          </Link> */}
        </div>
      </section>
    );
  };

export default Error404;