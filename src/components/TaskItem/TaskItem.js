import React, { useState } from "react";
import Proptypes from "prop-types"

export default function TaskItem({ id, titulo, estado, onTaskUpdate}) {

  const [isEditing, setIsEditing] = useState(false)
  const [editableTitulo, setEditableTitulo] = useState(titulo)

  const onTituloChange = (event) => {
    const newTitulo = event.target.value
    setEditableTitulo(newTitulo)
    onTaskUpdate(id, newTitulo, estado)
  }

  const onKeyPress = (event) => {
    if(event.key === "Enter"){
      setIsEditing(false)
    }
  }

  if (isEditing) {
    return <input type="text" value={editableTitulo} onChange={onTituloChange} onKeyPress={onKeyPress}/>
  }
  else {
    return <div onClick={(e) => setIsEditing(true)}>
      <ul class="list-group">
        <li class="list-group-item">{editableTitulo}</li>
        <li class="list-group-item">{estado}</li>
      </ul>
    </div>
  }

}

TaskItem.propTypes = {
  id: Proptypes.number.isRequired,
  titulo: Proptypes.string.isRequired,
  estado: Proptypes.string.isRequired
}