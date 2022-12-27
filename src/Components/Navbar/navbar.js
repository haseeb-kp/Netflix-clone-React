import React from 'react'
import './Navbar.css'

function navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
        <div className='head'>
        <h5>Home</h5>
        <h5>Movies</h5>
        <h5>Tv Shows</h5>
        <h5>Playtlist</h5>
        </div>
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  )
}

export default navbar 