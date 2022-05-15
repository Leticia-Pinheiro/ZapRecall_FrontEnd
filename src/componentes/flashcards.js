
export default function Flashcard(props){    
    function MostrarPergunta(i){
        let perguntaSel = document.getElementById(i)

        let botao = perguntaSel.querySelector(".indice")
        botao.classList.add("escondido")

        let questaoSel = perguntaSel.querySelector(".card")
        questaoSel.classList.remove("escondido")


    }


    return (
        <div className = "cards" id = {props.indice}>            
            <div className = "indice" onClick = {() => MostrarPergunta(props.indice)}>
                <span>Pergunta {props.indice}</span>
                <ion-icon name="play-outline"></ion-icon>
            </div>

            <div className = "card escondido">
                <div className = "questao front-face">
                    <h1>{props.questao}</h1>
                </div>
                <div className = "resposta back-face">
                    <h1>{props.resposta}</h1>
                </div>
            </div>
            
        </div>
    )
}