import { PlusCircle } from 'phosphor-react';
import styles from './ButtonCreate.module.css'

export function ButtonCreate(){
  return(
    <button className={styles.container}>
      Criar 
      <PlusCircle size={16}/>
    </button>
  )
}