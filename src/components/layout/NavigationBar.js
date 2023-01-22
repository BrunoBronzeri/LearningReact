import { Link } from "react-router-dom"
import meupau from'./Navbar.module.css'

function NavigationBar() {
    return(
      <ul className={meupau.list}>
        <li className={meupau.item}>
          <Link to='/'>Home</Link>
        </li>
        <li className={meupau.item}>
          <Link to='/empresa'>Empresa</Link>
        </li>
        <li className={meupau.item}>
          <Link to='/contato'>Contato</Link>
        </li>
      </ul>
    )
}

export default NavigationBar