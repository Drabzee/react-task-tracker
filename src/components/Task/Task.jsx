import React from 'react'
import styles from './Task.module.css'
import { FaTimes } from 'react-icons/fa'

const Task = ({ name, datetime, reminder, toggleReminder, deleteTask }) => {
  return (
    <div
     onDoubleClick={ toggleReminder }
     style={{borderLeftWidth: reminder ? 4 : 0}}
     className={styles.task}>
      <div className={styles.info}>
        <p className={styles.name}>{ name }</p>
        <p className={styles.datetime}>{ datetime.replace("T", " at ") }</p>
      </div>
      <FaTimes onClick={ deleteTask } color="red"></FaTimes>
    </div>
  )
}

export default Task
