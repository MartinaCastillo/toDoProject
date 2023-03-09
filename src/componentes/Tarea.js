import React from 'react';
import '../styles/Tarea.css';
import { FiDelete } from "react-icons/fi";


function Tarea({texto, completada}) {
  return (
    <div className={completada ? 'tarea-conmtenedor completada' : 'tarea-contenedor'}>
      <div className='tarea-texto'>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos'>
        <FiDelete className='tarea-icono' />
      </div>
    </div>
  );
}

export default Tarea;