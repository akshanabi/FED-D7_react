import React from 'react'

const Card = ({title}) => {
    const body ={
       height:"100vh",
       width: "100%",
       display: "flex",
       justifyContent: "center",
        alignItem:"center",
        backgroundColor: "cyan"
    }
    const container ={
        width:"300px",
        backgroundColor:"black",
        padding: "10px",
        textAlign: "center"
    }
    const image ={
        width: "100%",
        height:"200px"
    }
    const title_h1 = {
        display: "block",
        margin: "5px",
        color: "white",
    }
  return (
    <div style={body}>
      {/* <h1>CARD</h1> */}
      <div style={container}>
        <img src= "../Images/flower.jpg" alt="" style={image}/>
        <div id='content'>
            <h1 style={title_h1}>{title}</h1>
            <p style={{ color: "white"}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus id doloribus possimus quo iure harum molestiae? Tenetur aperiam, ab ullam quam magni, odit tempore dignissimos ut quis nemo animi.</p>
        </div>
      </div>
    </div>
  )
}

export default Card
