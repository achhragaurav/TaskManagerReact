import React from 'react';
import Tasks from './Tasks';
import { useState } from 'react';
import "./TaskManager.css"
const TaskManager = ({list, addTask, deleteItem, editItem}) => {
    const [task, setTask] = useState("");
    const [editMode, setEditMode] = useState(false)
    
  return (
    <div className='taskManager'>
        <form>
        <h3>Add Task</h3>
        <input type="text" value={task} onChange={(e) => {
           setTask(e.target.value)
        }} placeholder='Add new task'/>
        {!editMode && <button onClick={(e) => {
        e.preventDefault()
        addTask(task);
        setTask("")
        }}>Add Task</button>}
        {editMode && <button onClick={(e) => {
        e.preventDefault();
        editItem(editMode.listItem, task)
        setEditMode(false);
        setTask("")
        }}>Confirm</button>}
        </form>
      <Tasks editMode={editMode} setEditMode={setEditMode} task={task} setTask={setTask} deleteItem={deleteItem} editItem={editItem} list = {list}/>
    </div>
  );
}

export default TaskManager;
