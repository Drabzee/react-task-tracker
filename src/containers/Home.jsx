import React from 'react'
import Form from '../components/Form/Form'
import Header from '../components/Header/Header'
import TaskList from '../components/TaskList/TaskList'

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Form />
      <TaskList />
    </div>
  )
}

export default Home
