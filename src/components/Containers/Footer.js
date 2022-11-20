import React from 'react'
import { Box, Typography } from '@material-ui/core'
import './Footer.css'

const Footer = () => {
  return (
    
  <footer className='mt-24'>
  <div className="social">
    <p>Follow me on social media</p>
    <ul className="wrapper">
      <a href="https://www.linkedin.com/in/utkarsh-saxena-5a9034201/" rel="noreferrer"  target="_blank">
        <li className="icon linkedin">
          <span className="tooltip">LinkedIn</span>
          <span><i className="fab fa-linkedin"></i></span>
        </li>
      </a>
      <a href="https://github.com/UtkarshSaxenautk" rel="noreferrer" target="_blank">
        <li className="icon github">
          <span className="tooltip">GitHub</span>
          <span><i className="fab fa-github"></i></span>
        </li>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100080736631446" rel="noreferrer" target="_blank">
        <li className="icon facebook">
          <span className="tooltip">Facebook</span>
          <span><i className="fab fa-facebook-f"></i></span>
        </li>
      </a>
      <a href="https://www.instagram.com/utkarsh_saxena_utk/" rel="noreferrer"  target="_blank">
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <span><i className="fab fa-instagram"></i></span>
        </li>
      </a>
      <a href="https://twitter.com/Utkarsh82072872" rel="noreferrer"  target="_blank">
        <li className="icon twitter">
          <span className="tooltip">Twitter</span>
          <span><i className="fab fa-twitter"></i></span>
        </li>
      </a>
      <a href="https://codepen.io/utkarshsaxenautk"  rel="noreferrer" target="_blank">
        <li className="icon github">
          <span className="tooltip">CodePen</span>
          <span><i className="fab fa-codepen"></i></span>
        </li>
      </a>
    </ul>
  </div>
  <div className="final_text"></div>
  <p>Copyright &copy; All rights reserved
    <br/>Designed by Utkarsh Saxena, 2022
  </p>
</footer>
      
  )
}

export default Footer