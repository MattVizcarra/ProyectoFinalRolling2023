import React, { useState } from 'react';
import Imagen from '../assets/loginvector.png';
import ImageProfile from '../assets/profile1.jpg';

import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appFirebase);

const Registro = () => {
  const [registrando, setRegistrando] = useState(false);
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const functAutenticacion = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!nombres || !apellidos || !email || !contraseña) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (contraseña.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    // Puedes agregar validaciones adicionales para el correo electrónico aquí

    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth, email, contraseña);
        alert('Usuario registrado correctamente');
        // Agrega el usuario a un array o envíalo a tu backend
        const nuevoUsuario = { nombres, apellidos, email };
        console.log('Nuevo Usuario:', nuevoUsuario);
      } catch (error) {
        alert('Asegúrate de que la contraseña tenga más de 8 caracteres');
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, contraseña);
        // Puedes redirigir o manejar el inicio de sesión exitoso aquí
      } catch (error) {
        alert('El correo o la contraseña son incorrectos');
      }
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        {/* Columna más pequeña con el formulario */}
        <div className='col-md-4'>
          <div className='padre'>
            <div className='card card-body shadow-lg'>
              <img src={ImageProfile} alt='' className='estilo-profile' />
              <form onSubmit={functAutenticacion}>
                <input
                  type='text'
                  placeholder='Nombre'
                  className='cajatexto'
                  value={nombres}
                  onChange={(e) => setNombres(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Apellido'
                  className='cajatexto'
                  value={apellidos}
                  onChange={(e) => setApellidos(e.target.value)}
                />
                <input
                  type='email'
                  placeholder='Email'
                  className='cajatexto'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type='password'
                  placeholder='Contraseña'
                  className='cajatexto'
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />
                <button className='btnform'>{registrando ? 'Regístrate' : 'Regístrate'}</button>
              </form>
            </div>
          </div>
        </div>

        {/* Columna más grande con la imagen */}
        <div className='col-md-8'>
          <img src={Imagen} alt='' className='tamaño-imagen' />
        </div>
      </div>
    </div>
  );
};

export default Registro;