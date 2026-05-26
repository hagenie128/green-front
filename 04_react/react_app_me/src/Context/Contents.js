import React, { useContext } from 'react'
import './css/Contents.css'
import { DarkModeContext } from './DarkModeContext'

export default function Contents() {
  const {darkMode}=useContext(DarkModeContext)
  return (
    <section className='contents' style={darkMode? {background:'#2f3c58'}:{background:'white'}}>

    </section>
  )
}
