import React from 'react'
import { useLocation } from 'react-router-dom'

const Video = () => {
  const location = useLocation();
  const { video } = location.state || {};
    
  return (
    <section className="title">
    
        
    <div className="box-video">
      <h5>Teste de vídeo</h5>

      <p className="informacoes-videos">
        Informações: Softphone normalmente utilizado pelos setores de
        Atendimento e Coleta.
      </p>
      <iframe
        width="800"
        height="400"
        src={`https://www.youtube.com/embed/${video.clip}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    </section>    
  )  
}

export default Video;
