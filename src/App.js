import './App.css';
import logoTodo from './imagenes/todo-logo.png';
import Tarea from './componentes/Tarea.js';
import TareaFormulario from './componentes/TareaFormulario';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img 
        src={logoTodo}
        className='todo-logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
          <TareaFormulario />
      </div>
    </div>
  );
}

export default App;
