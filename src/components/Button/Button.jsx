import React from 'react'
import styles from './Button.module.css';

const Button = ({ children, bgColor, width, onClick }) => {
  return (
    <button
     onClick={ onClick }
     style={{ backgroundColor: bgColor, width: width }}
     className={`${styles.btn}`}>
      { children }
    </button>
  )
}

export default Button
