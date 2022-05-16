import React from "react"

export default function Rodape(props){  
    
    

    return(
        <div className = "rodape"> 
            <span>{props.respondidas} concluidos</span>
        </div>
    )
}