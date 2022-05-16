import React from "react"
import Flashcard from "./flashcards"
import Rodape from "./rodape"
import ReactDOM from "react-dom";


export default function Cards(){

    const [erro, setErro] = React.useState(0)
    const [quase, setQuase] = React.useState(0)
    const [acerto, setAcerto] = React.useState(0)
    const [respondidas, setRespondidas] = React.useState(0)

    function AumentarErro(){
        setErro(erro+1)            
        Verificacao()
    }

    function AumentarQuase(){
        setQuase(quase+1)        
        Verificacao()
        
    }

    function AumentarAcerto(){
        setAcerto(acerto+1)   
        Verificacao()        
    }
    
    function Verificacao(){
        setRespondidas(respondidas+1)

        if(respondidas === 3){
            Renderizar()
        }
    }

    function Aviso(){         
        return(
            <div className = "mensagem">
                <p className = "tituloAviso">
                    {(erro === 0)?"Parabéns!":"Putz..."}
                </p>
                <p className = "textoAviso">
                    {(erro === 0)?"Você não esqueceu de nenhum flashcard!":"Ainda faltam alguns... Mas não desanime!"}
                </p>
            </div>
        )   
               
    }

    function Renderizar(){
        ReactDOM.render(<Aviso/>, document.querySelector(".espacoMsg"));
    }
    

    return (
        <div className = "cards">
            <Flashcard 
            indice = "1"
            indiceQ = "1"
            
            questao = "Quanto é 2+2?"
            resposta = "4" 
            aumentarErro = {AumentarErro}
            aumentarQuase = {AumentarQuase}
            aumentarAcerto = {AumentarAcerto}            
            />

            <Flashcard 
            indice = "2"
            indiceQ = "2"
            
            questao = "Quanto é 3+3?"
            resposta = "6" 
            aumentarErro = {AumentarErro}
            aumentarQuase = {AumentarQuase}
            aumentarAcerto = {AumentarAcerto}
            />

            <Flashcard 
            indice = "3"
            indiceQ = "3"
            
            questao = "Quanto é 4+4?"
            resposta = "8" 
            aumentarErro = {AumentarErro}
            aumentarQuase = {AumentarQuase}
            aumentarAcerto = {AumentarAcerto}
            />

            <Flashcard 
            indice = "4"
            indiceQ = "4"
            
            questao = "Quanto é 5+5?"
            resposta = "10" 
            aumentarErro = {AumentarErro}
            aumentarQuase = {AumentarQuase}
            aumentarAcerto = {AumentarAcerto}
            />

            <div className = "espacoMsg"></div>

            <Rodape 
            erro = {erro}
            quase = {quase}
            acerto = {acerto}
            respondidas = {respondidas}
            />

        </div>
    )
}