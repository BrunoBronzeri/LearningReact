import  "./Item.modules.css"

function Item({marca, lancamento}) {
    return (
        <>
          <li>{marca} - {lancamento}</li> 
        </>
    )
}

export default Item