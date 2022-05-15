export default function Flashcard(props){
    return (
        <div className = "card">
            <div className = "indice">
                <h1>Pergunta {props.indice}</h1>
            </div>
            <div className = "questao">
                <h1>{props.questao}</h1>
            </div>
            <div className = "resposta">{props.resposta}</div>
        </div>
    )
}