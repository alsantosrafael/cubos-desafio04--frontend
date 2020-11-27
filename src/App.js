import Home from "./pages-containers/Home/Home";
import Cobrancas from "./pages-containers/Cobrancas/Cobrancas";
import CriarCobrancas from "./pages-containers/CriarCobrancas/CriarCobrancas";
import ConfiraEmail from "./components/ConfiraEmail/ConfiraEmail";
import "./index.css";
function App() {
  return (
    <>
      <div className="App">
        {/* <Home /> */}
        {/* <ConfiraEmail /> */}
        {/* <Cobrancas /> */}
        <CriarCobrancas />
      </div>

      {/* <main>
        <Login />
        <Cadastro />
      </main> */}
    </>
  );
}

export default App;
