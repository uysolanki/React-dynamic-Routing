import React from 'react'

const DropDownList = (props) => {

    function handleChange(event)
    {
        props.handleCategory(event.target.value)
    }
  return (
    <>
    <select onChange={handleChange}>
    {props.text.map((link)=>(
      <option key={link.name} value={link.name}>{link.name}</option>
    ))}
    </select>
    </>
  )
}

export default DropDownList