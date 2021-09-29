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
  
  const removePopFromList = () => {    
    setTasks((tarefasExistentes => {
      var lista = tarefasExistentes
      lista.pop()
      return [...lista]
    }))
  }

  return (
    <div className="App">
      <Navbar />
      <hr/>
      <div class="container">
        <div class="row">
          <div class="col">
            <TaskList titulo='Pendente' addTaskP={addNewTask} tasks={tasks} removeTaskP={removePopFromList} onTaskUpdate={updateTask}/>
          </div>
          <div class="col">
            <TaskList titulo='Andamento' addTaskP={addNewTask} tasks={tasks} removeTaskP={removePopFromList} onTaskUpdate={updateTask}/>
          </div>
          <div class="col">
            <TaskList titulo='Completa' addTaskP={addNewTask} tasks={tasks} removeTaskP={removePopFromList} onTaskUpdate={updateTask}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
