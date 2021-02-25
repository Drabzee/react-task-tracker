import React from 'react'
import Task from '../Task/Task'
import { connect } from 'react-redux';

const TaskList = ({ tasks }) => {
  return (
    <div style={{marginTop: 30}}>
      { tasks.length ? tasks.map((task) => 
        <Task
          key = { task.id }
          id = { task.id }
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

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps, null)(TaskList)
