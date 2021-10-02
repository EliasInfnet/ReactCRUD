import React, { useState } from "react";
import Proptypes from "prop-types"

export default function TaskItem({ id, titulo, estado, onTaskUpdate,removeTask }) {

  const [isEditing, setIsEditing] = useState(false)
  const [editableTitulo, setEditableTitulo] = useState(titulo)

  const onTituloChange = (event) => {
    const newTitulo = event.target.value
    setEditableTitulo(newTitulo)
    onTaskUpdate(id, newTitulo, estado)
  }

  const removerTask = (idAux) => {
    removeTask(idAux)
  }

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false)
      if(editableTitulo.length === 0){
        removerTask(id)
      }
    }
  }

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, titulo, event.target.value)
  }

  if (isEditing) {
    return <input type="text" value={editableTitulo} onChange={onTituloChange} onKeyPress={onKeyPress} />
  }
  else {
    return <div >
      <ul class="list-group">
        <li class="list-group-item" onClick={(e) => setIsEditing(true)}>{editableTitulo}</li>
        <select class="form-select" onChange={onTaskStateChange} value={estado}>
          <option value="Pendente">Pendente</option>
          <option value="Andamento">Andamento</option>
          <option value="Completa">Completa</option>
        </select>
      </ul>
    </div>
  }

}

TaskItem.propTypes = {
  id: Proptypes.number.isRequired,
  titulo: Proptypes.string.isRequired,
  estado: Proptypes.string.isRequired
}