import React, { useState } from "react";
import Proptypes from "prop-types"
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({titulo, addTaskP, tasks, removeTaskP, onTaskUpdate}) {  

  const addTask = () => {
    console.log('esta adicionando')
    addTaskP("elias","teste")
  }

  const removeTask = () => {
    console.log('esta removendo')
    removeTaskP()
  }

  return (
    <div>
      <div>{titulo}</div>
      <ul className='list-group'>
        {tasks.map((task) => {
          return <TaskItem key={task.id} id={task.id} titulo={task.titulo} estado={task.estado} onTaskUpdate={onTaskUpdate}/>
        })}
        <button onClick={addTask}>Incrementar</button>
        <button onClick={removeTask}>Deletar</button>
      </ul>
    </div>
  )
}

TaskList.propTypes = {
  titulo: Proptypes.string.isRequired,
  adicionarTask: Proptypes.func.isRequired,
  tasks : Proptypes.array.isRequired,
  removeTask : Proptypes.func.isRequired
}