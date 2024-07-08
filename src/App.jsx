import logo from '../public/logo.svg'
import { PlusCircle } from 'phosphor-react';

import './global.css'
import styles from './App.module.css'
import { Task } from './components/Task/Task'
import { useState } from 'react'
import { Empty } from './components/Task/Empty'


export function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [id, setId] = useState(0)
  const [countDone, setCountDone] = useState(0)

  function handleCreateNewTask(){
    event.preventDefault();
    const task = {content: newTask, id}
    setTasks([...tasks, task]);
    setNewTask('')
  }

  function handleNewTaskChange(){
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
    setId(() => id + 1)
  }

  function handleNewTaskInvalid(){
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteTask(id){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id;
  })
    setTasks(tasksWithoutDeletedOne)
  }

  function doneTask(){
    var checked = event.target.checked
    { checked == true ? (
      setCountDone(() => countDone + 1)
    ) :
    (setCountDone(() => countDone - 1))
    }
  }

  return (
    <div>
      <header className={styles.header}>
      <img src={logo} alt="" />
      <h1 className={styles.title}>
        <span>to</span>
        <span>do</span>
      </h1>
      </header>

      <form  onSubmit={handleCreateNewTask} className={styles.addTask}>
        <input
          name='task'
          className={styles.inputContainer} 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button type='submit' className={styles.buttonContainer}>
          Criar 
          <PlusCircle size={16}/>
        </button>
      </form>

      <div className={styles.taskContent}>
        <div className={styles.taskHeader}>
          <div className={styles.created}>
            <strong>Tarefas Criadas</strong>
            <span>{tasks.length}</span>
          </div>
          <div className={styles.done}>
            <strong>Concluídas</strong>
            <span>{countDone} de {tasks.length}</span>
          </div>
        </div>
        <div>
          {tasks.length == 0 ? (
            <Empty/>
          ) : (
            <div>
              {tasks.map( (task) => {
              return (
                <Task
                  key={task.id}
                  id = {task.id}
                  content={task.content} 
                  onDeleteTask={deleteTask}
                  onDoneTask={doneTask}
                />
              )
              })}
            </div>
              )
          } 
        </div>
      </div>
    </div>
    
    
  )
}

