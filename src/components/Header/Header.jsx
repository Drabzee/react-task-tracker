import React from 'react'
import Button from '../Button/Button'
import './Header.module.css'

const Header = ({ toggleForm, isFormVisible }) => {
  return (
    <header>
      <h1>Task Tracker</h1>
      <Button bgColor={ isFormVisible ? 'red' : 'green' } onClick={ toggleForm }>
        { isFormVisible ? 'Close' : 'Add' }
      </Button>
    </header>
  )
}

export default Header
