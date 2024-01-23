import styles from './AddTask.module.css'

const AddTask = ({setTrueOrFalse, tasks}) => {
    function addTaskOnClick () {
        setTrueOrFalse(true)
    }
    return(
        <>
        <div className={styles.addTaskDiv}>
            <button onClick={addTaskOnClick} className={styles.addTaskButton}>+</button>
            <p className={styles.addTaskP}>Добавить задачу</p>

        </div>
            {tasks.length === 0 ?
            <>
            <p className={styles.textImg}>Все задачи в <span className={styles.textImgSpan}>одном месте</span></p>
            <img className={styles.imgNothing} src='../assets/bottom.webp'></img>
            </> : ''}
            </>
    )
}

export default AddTask 