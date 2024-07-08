import { Trash } from 'phosphor-react';
import styles from './Task.module.css'

export function Task({id, content, onDeleteTask, onDoneTask}){

  function handleDeleteTask(){
    onDeleteTask(id)
  }

  function handleDoneTask(){
    onDoneTask()
  }

  return(    
    <div className={styles.content}>
      <label className={styles.container}>
        <input type="checkbox" onClick={handleDoneTask}/>
        <span className={styles.checkMark}></span>
        <p>{content}</p>
      </label>
      <button 
        className={styles.delete} 
        onClick={handleDeleteTask}>
        <Trash size={16} color='#808080'/>
      </button>
    </div>
  )
}