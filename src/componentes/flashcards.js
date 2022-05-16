import React from "react"


export default function Flashcard(props){   
    
    
    // LOGICA

    function MostrarPergunta(i){
        let perguntaSel = document.getElementById(i)

        let botao = perguntaSel.querySelector(".indice")
        botao.classList.add("escondido")

        let questaoSel = perguntaSel.querySelector(".card")
        questaoSel.classList.remove("escondido")
    }

    function Virar(i){
        let questaoVirar = document.getElementById(i)

        let questao = questaoVirar.querySelector(".questao")
        questao.classList.add("escondido")

        let resposta = questaoVirar.querySelector(".resposta")
        resposta.classList.remove("escondido")
    } 



    // RETORNAR

    return (  
                   
        <div className = "cards" id = {props.indice} onClick = {() => MostrarPergunta(props.indice)}>            
            <div className = "indice" >
                <span>Pergunta {props.indice}</span>
                <ion-icon name="play-outline"></ion-icon>
            </div>

            <div className = "card escondido" id = {props.indiceQ} onClick = {() => Virar(props.indiceQ)}>
                <div className = "questao " >
                    <h1>{props.questao}</h1>
                </div>
                
                <div className = "resposta  escondido">
                    <h1>{props.resposta}</h1>
                    <div className = "botoes">
                        <div className = "botao vermelho"  onClick={props.aumentarErro}>Não lembrei</div>
                        <div className = "botao laranja" onClick={props.aumentarQuase}>Quase não lembrei</div>
                        <div className = "botao verde" onClick={props.aumentarAcerto}>Zap!</div>                        
                    </div>                    
                </div>
            </div>        
            
        </div>      
    )
    
}