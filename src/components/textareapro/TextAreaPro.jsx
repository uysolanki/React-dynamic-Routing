import { useEffect, useState } from "react"
import './TextAreaPro.css'
const TextAreaPro = () => {

    const [text,setText]=useState("")
    const [count,setCount]=useState(0)

    useEffect(()=>{
            console.log("Excler Edtech")
    },[text])


    function handleUpdateInTextArea(event)
    {
        setText(event.target.value)
    }

    function convertToUpper()
    {
        
        setText(text.toUpperCase())
    }

    function convertToLower()
    {
        setText(text.toLowerCase())
    }
    function handleIncrement()
    {
        setCount(count+1)
    }

    function handleDecrement()
    {
        setCount(count-1)
    }
  return (
    <div className="parentContainer">
        <div className="left">
            <div>
            <textarea rows="10" cols="50" value={text} onChange={handleUpdateInTextArea}></textarea>
            </div>
            <div>
            <h3>Character Count : {text.length}</h3>
            <h3>Word Count : {text.split(" ").length}</h3>
            </div>
            <div className="button-group">
            <button onClick={convertToUpper}>Convert to Upper Case</button>
            <button onClick={convertToLower}>Convert to Lower Case</button>

            <button  onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <span>{count}</span>
            </div>
        </div>
        <div className="right"> 
           <h3>Preview : </h3> <p>{text}</p>
        </div>
    </div>
  )
}

export default TextAreaPro