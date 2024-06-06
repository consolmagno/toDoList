import clipboard from '../../assets/Clipboard.svg'
import styles from './Empty.module.css'

export function Empty(){
  return(
    <div className={styles.content}>
      <img src={clipboard} alt="Ícone Prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  )
}