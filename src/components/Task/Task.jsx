import { Trash } from 'phosphor-react';
import styles from './Task.module.css'

export function Task(){
  return(    
    <div className={styles.content}>
      <label className={styles.taskControl}>
        <input type="checkbox" />
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </label>
      <button className={styles.delete}><Trash size={16} color='#808080'/></button>
    </div>
  )
}