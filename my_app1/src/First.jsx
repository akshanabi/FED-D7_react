import React from 'react'

const First = () => {
  const color ={
    color: "cyan",
    backgroundColor: "blue"
  }
  return (
    <div>

      <h1 style={{color:"navyblue", backgroundColor:"pink"}}>HAVE A NICE DAY</h1>
      <p style={color}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius numquam non repellat delectus est consequatur perspiciatis modi. Corrupti cum, nisi excepturi minus repellendus eveniet magni voluptatum ipsa temporibus placeat!</p>
      <img src="../Images/flower.jpg" alt="Flower" width="300px" height="300px"/>
       </div>
  )
}

export default First
