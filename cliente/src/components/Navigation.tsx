import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>

      <ul>
        <li><Link to={'/SocialPage'}>SocialPage</Link></li>
        <li><Link to={'/StaticPage'}>StaticPage</Link></li>
        <li><Link to={'/RecetaListPage'}>RecetaListPage</Link></li>
        <li><Link to={'/DetailPage'}>DetailPage</Link></li>
        <li> <Link to={'/FormPage'}>FormPage</Link></li>
        <li><Link to={'/Login'}>Login </Link></li>
        <li> <Link to={'/Profile'}>Profile</Link></li>
        <li> <Link to={'/'}>Inicio</Link></li>
      </ul>
 
    </div>
  )
}

export default Navigation
