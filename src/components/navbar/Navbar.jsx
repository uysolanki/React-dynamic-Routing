import React from 'react'
import './Navbar.css'
import Navlist from './navlist/Navlist'
import { BiLogIn } from "react-icons/bi";
import Button from '../../shared/button/Button';
const Navbar = () => {
  return (
    <nav>
    <img src="excelrlogo.jpg" />
    <Navlist/>
    <Button  mytext="SIGN IN"  myicon= {<BiLogIn/>}/>
    </nav>
  )
}

export default Navbar