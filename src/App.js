import { useState } from "react";
import styles from"./App.module.css";
import AddTask from "./components/AddTask";
import CreateTask from "./components/CreateTask";
function App() {
  const [trueOrFalse, setTrueOrFalse] = useState(false);
  const [tasksList, setTasksList] = useState([])

  const deleteTask = (taskIndex)=>{
    const newTasksList = [...tasksList];
    console.log(taskIndex)
    newTasksList.splice(taskIndex, 1);
    for(let i = 0; i <= newTasksList.length -1;i++){
      newTasksList[i][2] = i
    }
    setTasksList(newTasksList)
  }

  return <div className={styles.App}>
    <h2 className={styles.day}>Сегодня</h2>
    <p className={styles.qtyTasks}>{tasksList.length} задачи</p>
    {trueOrFalse ? <CreateTask setTrueOrFalse={setTrueOrFalse} setTasksList={setTasksList} tasksList={tasksList} />:<AddTask setTrueOrFalse={setTrueOrFalse} tasks={tasksList} /> }
    {console.log(tasksList)}
    <div>{
      
      tasksList.map((task) => {
        return(
          <>
          
        <div className={styles.taskDiv}>
          <button className={styles.taskButton} onClick={() => deleteTask(task[2])} ></button>
          <div className={styles.taskTextDiv}>
          <p className={styles.taskName}>{task[0]}</p>
          <p className={styles.taskDescription}>{task[1]}</p>
          </div>
         
          </div>
           <hr className={styles.taskHr}/>
          </>
        )
      })
}</div>
    
  </div>;
}

export default App;
//✓