import React from 'react'
import { LinkedIn, Facebook, GitHub } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, I am Hien Nguyen</h2>
        <div className='prompt'>
          <p>A junior developer finding for internship</p>
          <Link to='https://www.linkedin.com/in/hien-nguyen-356727227/' target='_blank'><LinkedIn /></Link>
          <Link to='https://github.com/PhucHien21' target='_blank'><GitHub /></Link>
          <Link to='https://www.facebook.com/profile.php?id=100076163349038' target='_blank'><Facebook /></Link>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>HTML, CSS, ReactJS</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>MySQL</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Javascipt, Java</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home