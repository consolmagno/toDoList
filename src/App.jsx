import logo from './assets/logo.svg'

import './global.css'
import styles from './App.module.css'
import { Input } from './components/Input'
import { ButtonCreate } from './components/ButtonCreate'
import { Task } from './components/Task/Task'


export function App() {
  return (
    <div>
      <header className={styles.header}>
      <img src={logo} alt="" />
      <h1 className={styles.title}>
        <span>to</span>
        <span>do</span>
      </h1>
      </header>
      <div className={styles.addTask}>
        <Input/>
        <ButtonCreate/>
      </div>
      <div className={styles.taskList}>
        <div className={styles.taskHeader}>
          <div className={styles.created}>
            <strong>Tarefas Criadas</strong>
            <span>0</span>
          </div>
          <div className={styles.done}>
            <strong>Concluídas</strong>
            <span>0</span>
          </div>
        </div>
      </div>
      <Task/>
    </div>
    
    
  )
}

