import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/TaskList';


var idTasks = 0
const gerarId = () => {  
  idTasks += 1
  return idTasks
}

function App() {

  const [tasks, setTasks] = useState([])

  const updateTask = (id, titulo, estado) => {
    console.log('updateTask')
    setTasks((existingTasks => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return {...task, titulo, estado}
        }
        else return task
      })
    }))
  }

  const addNewTask = (titulo, estado) => {
    const newTask = {
      id: gerarId(), 
      titulo, 
      estado
    }
    setTasks((tarefasExistentes =>{
      return [...tarefasExistentes, newTask]
    }))
  }

  const removeTask = (id) => {
    setTasks((tarefasExistentes) => {
      return tarefasExistentes.filter((t) => t.id !== id)
    })
  }

  return (
    <div className="App">
      <Navbar />
      <hr/>
      <div class="container">
        <div class="row">
          <div class="col">
            <TaskList titulo='Pendente' addTaskP={addNewTask} estadoTask="Pendente" tasks={tasks.filter((t) => t.estado === "Pendente")} onTaskUpdate={updateTask} removeTask={removeTask}/>
          </div>
          <div class="col">
            <TaskList titulo='Andamento' addTaskP={addNewTask} estadoTask="Andamento" tasks={tasks.filter((t) => t.estado === "Andamento")} onTaskUpdate={updateTask} removeTask={removeTask}/>
          </div>
          <div class="col">
            <TaskList titulo='Completa' addTaskP={addNewTask} estadoTask="Completa" tasks={tasks.filter((t) => t.estado === "Completa")} onTaskUpdate={updateTask} removeTask={removeTask}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
