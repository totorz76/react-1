import "./MaCheckbox.css"
import React from 'react'

const MaCheckbox = (props) => {
    console.log(props)
  return (
    <div>
      <input type="checkbox" id='check' checked={props.stateCheck} ></input>
      <label htmlFor="check" className={props.colorCheck}>{props.children}</label>
    </div>
  )
}

export default MaCheckbox

