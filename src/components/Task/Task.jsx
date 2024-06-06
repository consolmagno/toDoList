import { Trash } from 'phosphor-react';
import styles from './Task.module.css'

export function Task(){
  return(    
    <div className={styles.content}>
      <label className={styles.container}>
        <input type="checkbox"/>
        <span className={styles.checkMark}></span>
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      </label>
      <button className={styles.delete}><Trash size={16} color='#808080'/></button>
    </div>
  )
}