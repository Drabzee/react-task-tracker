import React from 'react'
import Form from '../components/Form/Form'
import Header from '../components/Header/Header'
import TaskList from '../components/TaskList/TaskList'
import { useState } from 'react';

const Home = () => {

  const [tasks, setTasks] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormListener = () => {
    setIsFormVisible(!isFormVisible);
  }

  const addTaskListener = (task) => {
    setTasks([ ...tasks,
      { id: Math.floor(Math.random()*1000 + 1), ...task }
    ]);
  }

  const deleteTaskListener = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  const toggleReminderListener = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ));
  }

  return (
    <div className="container">
      <Header isFormVisible={ isFormVisible } toggleForm={ toggleFormListener } />
      { isFormVisible && <Form addTask={ addTaskListener } /> }
      <TaskList
       deleteTask = { deleteTaskListener }
       toggleReminder = { toggleReminderListener }
       tasks={ tasks } />
    </div>
  )
}

export default Home
