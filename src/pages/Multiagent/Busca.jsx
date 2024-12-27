/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import { Link, useNavigate } from "react-router-dom";
import "./estilo.css";
import Input from "./input";
import Select from "./select";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { videos } from "./dadosVideos";

function Busca() {
  // eslint-disable-next-line no-unused-vars
  const [videosPesquisados, setVideosPesquisados] = useState([""]);

  useEffect(() => {
    const fetchVideos = async () => {
      const todosVideos = videos;

      setVideosPesquisados(todosVideos);
    };
    fetchVideos();
  }, []);

  const [valorSelecionado, setValorSelecionado] = useState("");

  const navigate = useNavigate();

  const handleClick = (video) => {
    navigate("/video/:id", { state: { video } });
  };

  return (
    <section className="input-style">
      <h3>Qual é o problema em seu ramal?</h3>
      <h5>Solucione você mesmo através dos tutoriais.</h5>
      <div>
        <Select
          value={valorSelecionado}
          onChange={(event) => {
            const select = event.target.value;
            const encontradoArray = videos.filter((video) =>
              video.plataforma.toLowerCase().includes(select.toLowerCase())
            );
            setValorSelecionado(encontradoArray);
          }}
        >
          <option value="">Selecione a plataforma:</option>
          <option value="Interact">Interact Multiagent</option>
          <option value="UNA">UNA</option>
          <option value="Manager">Interact Manager</option>
          <option value="Todos">Todos</option>
        </Select>

        <Input
          placeholder="Digite aqui o problema encontrado..."
          onChange={(event) => {
            const textoDigitado = event.target.value;
            const resultaPesquisa = videos.filter((video) =>
              video.erro.toLowerCase().includes(textoDigitado.toLowerCase())
            );
            // eslint-disable-next-line no-lone-blocks
            setVideosPesquisados(resultaPesquisa);
          }}
        />
      </div>

      <section className="container-videos">
        {valorSelecionado.length === 0
          ? videosPesquisados.map((video) => (
              <div
                className="video"
                key={video.clip}
                onClick={() => handleClick(video)}
              >
                <div className="video-style">
                  <p className="texto-video">{video.erro}</p>
                  <img src={video.src} />
                  <p className="texto-video">{video.plataforma}</p>
                  <Link to={`/searchMultiagent`} className="button">
                    {" "}
                    Assistir Vídeo{" "}
                  </Link>
                </div>
              </div>
            ))
          : valorSelecionado.map((video) => (
              <div
                className="video"
                key={video.clip}
                onClick={() => handleClick(video)}
              >
                <div className="video-style">
                  <p className="texto-video">{video.erro}</p>
                  <img src={video.src} />
                  <p className="texto-video">{video.plataforma}</p>
                  <Link to={`/searchMultiagent`} className="button">
                    {" "}
                    Assistir Vídeo{" "}
                  </Link>
                </div>
              </div>
            ))}
      </section>
    </section>
  );
}

export default Busca;
