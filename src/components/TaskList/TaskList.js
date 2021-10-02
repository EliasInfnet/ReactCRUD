import React, { useState } from "react";
import Proptypes from "prop-types"
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({titulo, addTaskP,estadoTask, tasks, onTaskUpdate, removeTask}) {  

  const addTask = () => {
    console.log('esta adicionando')
    addTaskP("task",estadoTask)
  }

  return (
    <div>
      <div>{titulo}</div>
      <ul className='list-group'>
        {tasks.map((task) => {
          return <TaskItem key={task.id} id={task.id} titulo={task.titulo} estado={task.estado} onTaskUpdate={onTaskUpdate} removeTask={removeTask}/>
        })}
        <button onClick={addTask}>Incrementar</button>
      </ul>
    </div>
  )
}

TaskList.propTypes = {
  titulo: Proptypes.string.isRequired,
  adicionarTask: Proptypes.func.isRequired,
  tasks : Proptypes.array.isRequired
}