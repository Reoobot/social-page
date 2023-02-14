import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>HOme</h1>

      <ul>
        <li><Link to={'/StaticPage'}>StaticPage</Link></li>
        <li><Link to={'/RecetaListPage'}>RecetaListPage</Link></li>
        <li><Link to={'/DetailPage'}>DetailPage</Link></li>
        <li><Link to={'/FormPage'}>FormPage</Link></li>
        <li><Link to={'/Login'}>Login </Link></li>
        <li><Link to={'/Profile'}>Profile</Link></li>
        <li><Link to={'/SocialPage'}>SocialPage</Link></li>
       
      </ul>
      
        
        
        
        
        
        
        
    </div>
  )
}

export default Home
