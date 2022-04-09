import TaskManager from "./components/TaskManager";
import { useState } from "react";

function App() {
  const [list, setList] = useState(
    JSON.parse(window.localStorage.getItem("taskList")) && 
    JSON.parse(window.localStorage.getItem("taskList")).list
     || [])

  const addTask = async (task) =>{
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      if(element.task === task){
        alert("This Task already exists");
        return
      }
    }
    const newTask = {id: Math.random().toString(), task : `${task}`};
    setList(prev => {
     window.localStorage.setItem("taskList", JSON.stringify({list: [...prev, newTask]}));
     return [...prev, newTask]
    });
  }
  const deleteTask = async (taskId) => {
    setList(prev => {
      const taskItem = prev.findIndex(({ id }) => id === taskId );
      const newList = [...prev]
      newList.splice(taskItem, 1)
      window.localStorage.setItem("taskList", JSON.stringify({list: [...newList]}));
      return [...newList]
     });
  }
  const editTask = async (listItem, task) => {
    setList(prev => {
      const listItemIndex = prev.findIndex(({ id }) => id === listItem.id );
        const newList = [...prev];
        newList[listItemIndex] = {id: listItem.id, task: task};
        window.localStorage.setItem("taskList", JSON.stringify({list: [...newList]}));
        return newList
     });
  }
  return (
    <div className="App">
     <TaskManager editItem={editTask} deleteItem={deleteTask} list={list} addTask={addTask}/>
    </div>
  );
}

export default App;
