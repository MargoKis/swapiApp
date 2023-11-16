import React from 'react'
import Button from '../atoms/Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-red">
      <div className='header-btn-wrap'>
    <Link to="/people">
      <Button nameButton="people" classNameButton='header-btn'>People</Button>
    </Link>
    <Link to='/starships'>
      <Button nameButton="starships" classNameButton='header-btn' >Starships</Button>
    </Link>
    <Link to='/planets'>
      <Button nameButton="planets" classNameButton='header-btn' >Planets</Button>
    </Link>
    </div>
  </div>
  )
}

export default Header