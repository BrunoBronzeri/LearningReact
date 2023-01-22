function Saudacao({ nome }) {

    function gerarSaudacao(algumNome) {
       return `Olá, ${algumNome}!`
    }

    return(
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )

    const meusItens = ['React', 'Vue', 'Angular'] //{frameWork: 'x', aluno: 154} para Renderização Lista
    const [nome, setNome] = useState() //declarar no pai

}

export default Saudacao