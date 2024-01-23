import { useState } from 'react'
import styles from'./CreateTask.module.css'

const CreateTask = ({setTrueOrFalse, setTasksList, tasksList}) => {
const [name, setName] = useState("")
const [description, setDescription] = useState("")

function addTaskOnClick () {
  setTrueOrFalse(false)
}
let qtyTaskss = tasksList.length 
function addTasks () {
  setTrueOrFalse(false)
  setTasksList([...tasksList, [name,
  description,qtyTaskss]])

}
return (
  <div className={styles.createTaskDiv}>
  <form className={styles.createTaskForm}>
    <textarea value={name} onChange={(e) => {setName(e.target.value)}} className={styles.nameTask} placeholder='Название задачи'/>
    <textarea value={description} onChange={(e) => {setDescription(e.target.value)}} className={styles.description} placeholder='Описание'/>
  </form>  

  <hr className={styles.hr} />
  <div className={styles.createTaskBottom}>
    <button className={styles.escape} onClick={addTaskOnClick}>Отмена</button>
    <button className={styles.enter} onClick={addTasks}>Добавить задачу</button>
  </div>
  </div>
)
}
export default CreateTask 