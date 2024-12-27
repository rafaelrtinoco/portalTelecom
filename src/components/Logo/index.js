import logo from '../../imagens/logo_intranet.png'
import logodigitro from '../../imagens/digitro.png'
import './estilo.css'
import OpcoesHeader  from '../OpcoesHeader';



function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt='logo-braspress'></img>      
      <OpcoesHeader />
       <img src={logodigitro} alt='logo-digitro'></img>
    </div>
  );
}

export default Logo;
