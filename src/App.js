import Login from "./Login/Login";
import Cadastro from "./Cadastro/Cadastro";
import Menu from "./Menu/Menu";
import Perfil from "./Perfil/Perfil";
import RecuperarSenha from "./RecuperarSenha/RecuperarSenha";

function App() {
  return (
    <>
      <div className="App">
        <Menu />
        <Cadastro />
        <RecuperarSenha />
        <Login />
		
      </div>

      {/* <main>
        <Login />
        <Cadastro />
      </main> */}
    </>
  );
}

export default App;
