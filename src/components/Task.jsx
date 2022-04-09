import React, { useState, useEffect } from 'react';
import {AiFillDelete,AiFillEdit} from "react-icons/ai";
import "./Task.css"
const Task = ({listItem, deleteItem, editItem, task, setTask, setEditMode,editMode}) => {

  const [editing, setEditing] = useState(false);
  
  useEffect(() =>{
   if(editing && editing.classList.contains("editing")
    ){
      editing.classList.remove("editing")
    }
    else if(editing){
      editing.classList.add("editing")
    }
  },[editMode])

   return (
    <li className='listItem'>
      <h1>{listItem.task}</h1> 
      <div className="buttons">
      <button onClick={() =>{
          deleteItem(listItem.id)
      }}><AiFillDelete/></button>
      <button onClick={(e) =>{
          setEditMode({listItem})
          setTask(listItem.task);
          setEditing(e.target.closest("li"));
      }}><AiFillEdit/></button>
      </div>
    </li>
  );
}

export default Task;
