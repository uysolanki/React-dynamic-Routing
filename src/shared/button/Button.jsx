import React from 'react'

const Button = (props) => {
  return (
    <button>
            {props.mytext}
            {props.myicon}
    </button>
  )
}

export default Button