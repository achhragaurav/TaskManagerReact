import React from 'react';
import Task from './Task';
import "./Tasks.css"
const Tasks = ({list, deleteItem, editItem, task, setTask, setEditMode,editMode}) => {
  return (
    <ol className='tasks'>
     {list && list.length > 0 ? list.map((listItem) => {
         return <Task editMode={editMode} task={task} setEditMode={setEditMode} setTask={setTask}  deleteItem={deleteItem} editItem={editItem} key={listItem.id}  listItem={listItem}/>
     }) : <h1>No Tasks</h1>}
    </ol>
  );
}

export default Tasks;
