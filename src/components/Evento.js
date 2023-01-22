import Button from "./evento/Button"

function Evento() { 
    function meuEvento(){
        console.log(`Ativando primeiro evento`)
    }
    
    function secondEvent() {
        console.log(`2nd event activated!!`)
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <button onClick={meuEvento}>Ativar!</button>
            <Button event={secondEvent} text="2nd Event" /> 

        </div>
    )
}

export default Evento