import React from 'react'
import styles from './Form.module.css'
import Button from '../Button/Button'
import { useState } from 'react';

const Form = ({ addTask }) => {

  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmitListener = (e) => {
    e.preventDefault();
    if(!name) {
      alert('Task field is mandatory');
    } else if(!datetime) {
      alert('Date and Time filed is mandatory');
    } else {
      addTask({ name, datetime, reminder });
      e.target.reset();
      setName('');
      setDatetime('');
      setReminder(false);
    }
  }

  return (
    <form onSubmit={ onSubmitListener }>
      <div className={ styles.formGroup }>
        <label>Task</label>
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" placeholder="Add Task" />
      </div>
      <div className={ styles.formGroup }>
        <label>Date and Time</label>
        <input onChange={(e) => setDatetime(e.target.value)} value={datetime} type="datetime-local" name="datetime" />
      </div>
      <div className={ styles.inlineGroup }>
        <p>Set Reminder</p>
        <input onChange={(e) => setReminder(e.target.checked)} checked={reminder} type="checkbox" name="reminder" />
      </div>
      <Button
        bgColor = "black" 
        width = "100%"
        className = "btnFull">
          Save Task
      </Button>
    </form>
  )
}

export default Form
