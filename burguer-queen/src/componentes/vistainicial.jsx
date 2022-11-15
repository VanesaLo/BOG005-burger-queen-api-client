import React from 'react'
import '../estilos-css/vistainicial.css'
import imagen from '../imagenes/Gourmet.jpg';


function Paginainicial() {
    return (
        <div className='contenedor-principal'>
            <img className='imagen-logo' src={imagen}
                alt='foto del logo' />
            <div className='contenedor-ingreso'>
                <label htmlFor='Email' /> E-mail
                <input type='text' />
                <label htmlFor='contraseña' /> Contraseña
                <input type='text' />
                <div className='contenedor-botton'>
                <button className='button-siguiente'>Siguiente</button>
                </div>
                </div>
            </div>
            
    );
}

export default Paginainicial;
