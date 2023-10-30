import React from 'react'
import { LinkedIn, Facebook, GitHub } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Link to='https://www.linkedin.com/in/hien-nguyen-356727227/' target='_blank'><LinkedIn /></Link>
        <Link to='https://github.com/PhucHien21' target='_blank'><GitHub /></Link>
        <Link to='https://www.facebook.com/profile.php?id=100076163349038' target='_blank'><Facebook /></Link>
      </div>
      <p>Gmail: hiennguyen210901@gmail.com</p>
      <p>Phone: +358 465 933 833</p>
    </div>
  )
}

export default Footer