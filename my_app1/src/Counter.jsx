import React, {useState} from 'react'

const Counter = () =>{
    //useState
    const[count, setCount] = useState(10)
    
    const handleAdd = function()
    {
        setCount(count + 1)
    }
    const[count1, setdCount] = useState(count)
    const handleminus = function()
    {
        setdCount(count1 - 1)
    }
    return (
    <div>
        <h1>COUNTER</h1>
    <div>
        <button onClick = {handleAdd}>ADD{count}</button>
        <p>{count}</p>
        <button onClick = {handleminus}>Minus{count1}</button>
    </div>
    </div>
)
}

export default Counter