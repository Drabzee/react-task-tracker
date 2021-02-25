import React from 'react'
import styles from './Task.module.css'
import { FaTimes } from 'react-icons/fa'
import { connect } from 'react-redux'
import { deleteTask, toggleReminder } from '../../redux'

const Task = ({ id, name, datetime, reminder, toggleReminder, deleteTask }) => {
  return (
    <div
     onDoubleClick={ () => toggleReminder(id) }
     style={{borderLeftWidth: reminder ? 4 : 0}}
     className={styles.task}>
      <div className={styles.info}>
        <p className={styles.name}>{ name }</p>
        <p className={styles.datetime}>{ datetime.replace("T", " at ") }</p>
      </div>
      <FaTimes onClick={ () => deleteTask(id) } color="red"></FaTimes>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => dispatch(deleteTask(id)),
    toggleReminder: (id) => dispatch(toggleReminder(id))
  };
}

export default connect(null, mapDispatchToProps)(Task)