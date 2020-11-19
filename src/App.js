import Login from "./Login/Login";
import Cadastro from "./Cadastro/Cadastro";
import Menu from "./Menu/Menu";
import Perfil from "./Perfil/Perfil";

function App() {
  return (
    <>
      <div className="App">
        <Menu />
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
