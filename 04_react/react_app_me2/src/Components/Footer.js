import React from 'react'
import './css/Footer.css'

export default function Footer({text}) {
  return (
    <footer>
        <p className='footer_text'>
            {text}
        </p>
    </footer>
  )
}
