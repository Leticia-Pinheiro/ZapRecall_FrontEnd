import Topo from "./topo"
import Cards from "./cards"
import Rodape from "./rodape"


export default function Perguntas(){
    return(
        <div className = "bodyPerguntas">
            <Topo />    
            <Cards /> 
            {/* <Rodape />     */}
        </div>
    )
}