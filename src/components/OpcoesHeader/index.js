/* eslint-disable no-unused-vars */
import { Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./estilo.css";

function OpcoesHeader() {
  return (
    <ul className="opcoes">
      <li className="opcao">
        <Link className="style-link" to="/">
          Primeiro acesso
        </Link>
        <Link className="style-link" to="searchMultiagent">
          Vídeos para ajuda com problemas
        </Link>
      </li>
    </ul>
  );
}

export default OpcoesHeader;
