import React from "react";
import "./estilo.css";
import ReactVideoPlayer from "./ReactVideoPlayer";
import ReactVideoPlayerUna from "./ReactVideoPlayerUna";
import ReactVideoPlayerManager from "./ReactVideoPlayerManager";

const Home = () => {
  return (
    <section className="title">
      {/* <h2 className="titulo-principal">Bem-vindo á Central de Ajuda Dígitro</h2> */}
      <h3>
        {" "}
        Segue abaixo vídeos para instrução de primeiro acesso e configurações básicas de utilização das plataformas de telefonia.
      </h3>
      <h5 className="apresentacao">
        Essa plataforma foi criada com o próposito de instruir os colaboradores
        que utilizam as Plataformas de Telefonia Dígitro a utlizarem de forma
        correta e prática. {" "}
      </h5>
     
      <br></br>
      <div className="box-video">
        <h5>Primeiro acesso no Interact MultiAgent</h5>
        <ReactVideoPlayer />
        <p className="informacoes-videos">
        Link para acesso a plataforma: <a className='links_home'href="https://callcenter.braspress.com/interact_multiagent/" target="_blank" rel="noopener noreferrer">Interact Multiagent</a>
        </p>
      </div>

      <div className="box-video">
        <h5>Primeiro acesso no UNA</h5>
        <ReactVideoPlayerUna />
        <p className="informacoes-videos">
        Link para acesso a plataforma: <a className='links_home' href="https://ramal.braspress.com/una/login" target="_blank" rel="noopener noreferrer">UNA</a>
        </p>
      </div>

      <div className="box-video">
        <h5>Primeiro acesso no Interact Manager</h5>
        <ReactVideoPlayerManager />
        <p className="informacoes-videos">
        Link para acesso a plataforma: <a className='links_home' href="https://172.16.64.45/interact_manager/" target="_blank" rel="noopener noreferrer">Interact Manager</a>
        </p>
      </div>
    </section>
  );
};

export default Home;
