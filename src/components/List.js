import Item from "./Item"
import PropTypes from 'prop-types'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" lancamento={2021} />
                <Item marca="Bugatti" lancamento={2020} />
                <Item  />
                <Item marca="Mercedes" lancamento={2022} />
            </ul>
        </>
    )

}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca', 
    lancamento: 0,
}

export default List