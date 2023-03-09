import React from 'react';
import '../styles/TareaFormulario.css'

function TareaFormulario(props){
  return(
    <form className='tarea-formulario'>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
      />
      <button className='tarea-boton'>
        Agregar Tareas
      </button>
    </form>
  );
}

export default TareaFormulario;