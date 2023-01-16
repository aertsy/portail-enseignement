import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/schools">Écoles</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
      );
}
 
export default Menu;