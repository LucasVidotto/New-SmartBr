import LogoUfscar from '../../assets/Logo/LogoUFSCar.jpg';
import '../../styles/logo.css';
export function Logo(){
    return(
        <>
            <div className="cabecalho">
                <div className="logo">
                    <img src={LogoUfscar} alt="Imagem Logo ufscar" title="Imagem Logo ufscar" />
                </div>
            </div>
        </>
    )
}