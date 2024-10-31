import React from "react";

function Square(props){
    return(
        <div className="square" style={{border:'2px solid', height:'100px', width:'100%', justifyContent:"center", display:"flex",
            alignItems:"center"
         }} onClick={props.onClick}>

            <h4>{props.value}</h4>

        </div>
    )
}

export default Square;