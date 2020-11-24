import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro";
import Menu from "./components/Menu/Menu";
import Perfil from "./components/Perfil/Perfil";
import RecuperarSenha from "./components/RecuperarSenha/RecuperarSenha";

function App() {
  return (
    <>
      <div className="App">
        <Menu />
        <Cadastro />
        <RecuperarSenha />
        <Login />
        <Perfil />
      </div>

      {/* <main>
        <Login />
        <Cadastro />
      </main> */}
    </>
  );
}

export default App;
