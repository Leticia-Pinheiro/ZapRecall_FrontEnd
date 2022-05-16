import ReactDOM from "react-dom";
import Perguntas from "./perguntas"

export default function Menu(){

    // LOGICA

    function TrocaTela(){       
        ReactDOM.render(<Perguntas />, document.querySelector(".root")); 
        
        const menu = document.querySelector(".corpoMenu")
        menu.classList.add("escondido")               
    }

    // RETORNO

    return(
        <div className = "corpoMenu">
            <img src="images/image1.png" className = "logo"></img>
            <span className = "tituloMenu">ZapRecall</span>
            <button className = "iniciar" onClick = {TrocaTela}>Iniciar Recall!</button>
        </div>
    )
}