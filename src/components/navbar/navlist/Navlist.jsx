import React from "react";
import "./Navlist.css";
import { Link } from "react-router-dom";
const Navlist = (props) => {
  return (
    <ul>
      {props.text.map((link) => (
        <Link
          to={link.link}
          key={link.name}
        >
        <li onClick={()=>props.handleCategory(link.name)}>{link.name}</li>
        </Link>
      ))}
    </ul>
  );
};



export default Navlist;

// {
//   /* <Link to={"myapp1"}><li>{props.text[0]}</li></Link>
//         <Link to="/"><li>{props.text[1]}</li></Link>
//         <Link to="myapp3"><li>{props.text[2]}</li></Link> */
// }
