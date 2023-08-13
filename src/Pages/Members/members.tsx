import { Logo } from "../../Components/Logo/logo";
import { NavBar } from "../../Components/navbar";
import '../../styles/boxAll.css';
import '../../styles/members.css';
/* import { FileMembers } from "./fileMembers"; */
export function Members(){
    return(
        <>
             <Logo />
            <NavBar />
            <div className="container-box">
                <div className="main-box">
                    <div className="card-members">
                        <div className="title-author">
                            <span>
                                Author Name
                            </span>
                        </div>
                        <div className="info-member">
                            <div className="member-image">
                                <img src="http://smart.ufscar.br/imagem/carlos.jpg" alt="" />
                            </div>
                            <div className="members">
                                <div className="memberSpans">
                                    <span>Formação: </span>
                                </div>
                                <span>Graduação em Engenharia de Materiais(UFSCar)</span>
                                <span>Mestre em Engenharia dos Materiais(UFSCar)</span>
                                <span>Doutor em Ciência e Engenharia dos Materias(UFSCar)</span>
                                <div className="memberSpans">
                                    <span>Atuação Profissional: </span>
                                </div>
                                <span>Professor do Magistério Superior da Universidade Federal de São Carlos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}