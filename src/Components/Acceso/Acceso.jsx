import React, { useState } from 'react';
import Imagen from '../../assets/Login/loginvector.png';
import ImageProfile from '../../assets/Login/profile1.jpg';

import appFirebase from '../Acceso/Credenciales/Credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(appFirebase);

const Login = () => {
    const [registrando, setRegistrando] = useState(false);

    const functAutenticacion = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        // Validación de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            alert("Por favor, ingresa un correo electrónico válido");
            return;
        }

        // Validación de contraseña
        const minPasswordLength = 8;
        const maxPasswordLength = 20; // Ajusta la longitud máxima según sea necesario

        if (contraseña.length < minPasswordLength || contraseña.length > maxPasswordLength) {
            alert(`La contraseña debe tener entre ${minPasswordLength} y ${maxPasswordLength} caracteres`);
            return;
        }

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña);
                alert("Registro exitoso");
            } catch (error) {
                alert("Asegúrate de que la contraseña tenga al menos 8 caracteres");
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña);
                alert("Inicio de sesión exitoso");
            } catch (error) {
                alert("El correo o la contraseña son incorrectos");
            }
        }
    };

    return (
        <div className='container'>
            <div className="row">
                {/* columna más pequeña formulario */}
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src={ImageProfile} alt="" className='estilo-profile' />
                            <form onSubmit={functAutenticacion} >
                                <input type="text" placeholder='Ingresar Email' className='cajatexto' id='email' />
                                <input type="password" placeholder='Ingresar Contraseña' className='cajatexto' id='password' />
                                <button className='btnform'> {registrando ? "Registrate" : "Iniciar Sesión"} </button>
                            </form>

                            <h4 className='texto'> {registrando ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
                                <button className='btnswicth' onClick={() => setRegistrando(!registrando)}>
                                    {registrando ? "Iniciar Sesión" : "Registrate"}
                                </button>
                            </h4>
                        </div>
                    </div>
                </div>

                {/* columna más grande */}
                <div className="col-md-8">
                    <img src={Imagen} alt="" className='tamaño-imagen' />
                </div>
            </div>
        </div>
    );
};

export default Login