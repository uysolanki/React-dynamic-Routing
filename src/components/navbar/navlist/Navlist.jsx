import React from 'react'
import './Navlist.css'
import {Link} from 'react-router-dom'
const Navlist = () => {
  return (
    <ul>
        <Link to="myapp1"><li>Shopping App</li></Link>
        <Link to="/"><li>TextArea App</li></Link>
        <Link to="myapp3"><li>App 3</li></Link>
    </ul>
  )
}

export default Navlist