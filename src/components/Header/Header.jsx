import React from 'react'
import Button from '../Button/Button'
import './Header.module.css'
import { connect } from 'react-redux'
import { toggleFormVisibility } from '../../redux'

const Header = ({ toggleFormVisibility, formVisibility }) => {
  return (
    <header>
      <h1>Task Tracker</h1>
      <Button bgColor={ formVisibility ? 'red' : 'green' } onClick={ toggleFormVisibility }>
        { formVisibility ? 'Close' : 'Add' }
      </Button>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    formVisibility: state.formVisibility
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFormVisibility: () => dispatch(toggleFormVisibility())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
