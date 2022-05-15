import Flashcard from "./flashcards"

export default function Cards(){
    return (
        <div className = "cards">
            <Flashcard 
            indice = "1"
            questao = "Quanto é 2+2?"
            resposta = "4" />

            <Flashcard 
            indice = "2"
            questao = "Quanto é 3+3?"
            resposta = "6" />

            <Flashcard 
            indice = "3"
            questao = "Quanto é 4+4?"
            resposta = "8" />

            <Flashcard 
            indice = "4"
            questao = "Quanto é 5+5?"
            resposta = "10" />

        </div>
    )
}