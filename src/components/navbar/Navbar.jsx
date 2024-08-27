import React from 'react'
import './Navbar.css'
import Navlist from './navlist/Navlist'
import { BiLogIn } from "react-icons/bi";
import Button from '../../shared/button/Button';
const Navbar = () => {
  const links=[{name:"Shopping Appli",link:"/myapp1"},{name:"TextArea Appli",link:"/"},{ name:"Appli 3",link:"/myapp3"}]
  return (
    <nav>
    <img src="excelrlogo.jpg" />
    {/* <Navlist text={["Shopping Appli","TextArea Appli", "Appli 3"]}/> */}
    <Navlist text={links}/>
    <Button  mytext="SIGN IN"  myicon= {<BiLogIn/>}/>
    </nav>
  )
}

export default Navbar