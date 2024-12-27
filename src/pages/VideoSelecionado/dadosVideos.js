import pausaPorFalha from '../../imagens/pausa-por-falha.png'
import ReactVideoPlayer from "./ReactVideoPlayer";


export const videos = [
  {erro: 'Pausa por Falha', id: 1, plataforma: 'interact', clip: <ReactVideoPlayer /> , src:pausaPorFalha},
  {erro: 'Definir Rota', id: 2, plataforma: 'interact', clip: <ReactVideoPlayer />, src:pausaPorFalha},
  {erro: 'Servidor não Responde', id: 3, plataforma: 'interact', clip: <ReactVideoPlayer />, src:pausaPorFalha},
  {erro: 'Erro 4', id: 4, plataforma: 'interact', clip: <ReactVideoPlayer />, src:pausaPorFalha},
  {erro: 'Erro 5', id: 5, plataforma: 'interact', clip: <ReactVideoPlayer />, src:pausaPorFalha}
]