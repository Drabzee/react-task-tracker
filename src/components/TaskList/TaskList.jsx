import React from 'react'
import Task from '../Task/Task'

const TaskList = ({ tasks, toggleReminder, deleteTask }) => {
  return (
    <div style={{marginTop: 30}}>
      { tasks.length ? tasks.map((task) => 
        <Task
          deleteTask = {() => deleteTask(task.id)}
          toggleReminder = {() => toggleReminder(task.id)}
          key = { task.id }
          name = { task.name }
          datetime = { task.datetime }
          reminder = { task.reminder } />
      )
      : <p style={{
         textAlign: "center",
         color: "gray",
         fontSize: ".8rem", 
         fontStyle: "italic",
        }}>
          No tasks to display
        </p>}
    </div>
  )
}

export default TaskList
