// import UltimosLancamentos from './components/UltimosLancamentos'
import Logo from "./components/Logo";
import Footer from './components/Footer'
import "./App.css";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />

        <Outlet />
      </header>
      <Footer />
    </div>
  );
}

export default App;
