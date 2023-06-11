import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div><Link to="/">VideoLink</Link>
    <form><input type="text" placeholder='検索'/><button type='submit'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button></form>
    </div>

  )
}

export default Header