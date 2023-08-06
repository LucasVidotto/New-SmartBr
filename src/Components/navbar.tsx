import '../styles/navbar.css';
export function NavBar (){
    return(
        <>
            <div className="container-nav">
                <div className="nav-bar">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Membros</a></li>
                        <li><a href="#">Linha de Pesquisa</a></li>
                        <li><a href="#">Publicações</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}