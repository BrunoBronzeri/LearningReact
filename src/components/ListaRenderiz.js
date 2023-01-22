function ListRenderiz({ itens }) {
    return(
        <>
            <h3>Lista de Cacetes</h3>
            {itens.length > 0 ? (  //seria um if pro react, o qual requer um else
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                )))
                : (<p>Não há itens na lista</p>) //esse é o else do react. :(...)
            }
        </>
    )
}

export default ListRenderiz