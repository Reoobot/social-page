import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
        <Link to={'/SocialPage'}>SocialPage</Link>
        <Link to={'/StaticPage'}>StaticPage</Link>
        <Link to={'/RecetaListPage'}>RecetaListPage</Link>
        <Link to={'/DetailPage'}>DetailPage</Link>
        <Link to={'/FormPage'}>FormPage</Link>
        <Link to={'/Login'}>Login </Link>
        <Link to={'/Profile'}>Profile</Link>
    </div>
  )
}

export default Navigation
