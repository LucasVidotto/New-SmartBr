import '../styles/navbar.css';
import { Link } from 'react-router-dom';
export function NavBar (){
    return(
        <>
            <div className="container-nav">
                <div className="nav-bar">
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/membros">Membros</Link></li>
                        <li><Link to="#">Linha de Pesquisa</Link></li>
                        <li><Link to="#">Publicações</Link></li>
                        <li><Link to="#">Contato</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}