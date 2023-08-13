import React from 'react';
import { Logo } from "../../Components/Logo/logo";
import { NavBar } from "../../Components/navbar";
import '../../styles/menu.css';
import '../../styles/boxAll.css';
import Smart from '../../assets/Logo/Logo.png';
import VideoCard from './videocard';
import { File } from './file';
import Exp01 from '../../assets/Experimento01.png';
import Exp02 from '../../assets/Experimento02.png';
import Exp03 from '../../assets/Experimento03.png';

const coverImage = 'http://www.labi.ufscar.br/wp-content/uploads/2017/01/musculos-750x400.png';
const videoUrl = 'https://www.youtube.com/watch?v=QFePn-bPaWM&t=1s'; // Substitua pelo link correto do vídeo do YouTube

export function Menu() {
  return (
    <>
      <Logo />
      <NavBar />
      <div className="container-box">
        <div className="main-box">
          <div className="info-left">
            <div className="image-logo">
              <img src={Smart} alt="Imagem Smart" />
            </div>
            <div className="text-container">
              {File.map((item, index) => (
                <>
                  <span key={index}>{item.context}</span>
                </>
              ))}
            </div>
          </div>
          <div className="barra-right">
            <div className="title-news">
              <span>Entrevista para o LAbI:</span>
              <span>Pesquisas da UFSCar desenvolvem 
                    materiais que atuam como músculos artificiais
              </span>
              <VideoCard coverImage={coverImage} videoUrl={videoUrl} />
            </div>
            <div className='bar-exp'>
                <div className='img-exp'>
                  <img src={Exp01} alt="Imagem Experimento" title='Primeiro Experimento' />
                </div>
                <div className='img-exp'>
                  <img src={Exp02} alt="Imagem Experimento" title='Segundo Experimento' />
                </div>
                <div className='img-exp'>
                  <img src={Exp03} alt="Imagem Experimento" title='Terceiro Experimento' />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
