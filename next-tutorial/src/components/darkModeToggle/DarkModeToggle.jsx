"use client"


import React, { useContext } from 'react'
import styles from './darkModeToggle.module.css'
import { ThemeContext } from '../../context/ThemeContext'

export default function  darkModeToggle() {

    const {toggleTheme,theme} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggleTheme} >
        <div className={styles.icon}>🌕</div>
        <div className={styles.icon}>☀️</div>
        <div style={theme ==="light" ? {left:"2px"} : {right:"2px"}} className={styles.ball}/>
    </div>
  )
}
