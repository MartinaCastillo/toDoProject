import React from 'react';
import '../styles/Tarea.css';
import { HiFire } from "react-icons/hi";


function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div
       className='tarea-contenedor-iconos'
       onClick={()  => eliminarTarea(id)}>
        <HiFire className='tarea-icono' />
      </div>
    </div>
  );
}

export default Tarea;