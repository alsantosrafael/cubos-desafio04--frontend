import Home from "./pages-containers/Home/Home";
import Cobrancas from "./pages-containers/Cobrancas/Cobrancas";
import CriarCobrancas from "./pages-containers/CriarCobrancas/CriarCobrancas";
import ConfiraEmail from "./components/ConfiraEmail/ConfiraEmail";
import Clientes from "./pages-containers/Clientes/Clientes";
import CriarCliente from "./pages-containers/CriarCliente/CriarCliente";
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import "./index.css";

function App() {
  // const { params } = useRouteMatch();
  // const { id } = params;

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/" render={() => <Home />} /> */}
          {/* <Route exact path="/" component={Home} /> */}

          <Route exact path="/cobrancas">
            <Cobrancas />
          </Route>

          {/* <Route path="/cobrancas/editar/:id">
            <EditarCobrancas />
          </Route> */}

          <Route exact path="/criar-cobrancas">
            <CriarCobrancas />
          </Route>

          <Route exact path="/confirmacao-email">
            <ConfiraEmail />
          </Route>

          <Route exact path="/clientes">
            <Clientes />
          </Route>

          <Route exact path="/adicionar-cliente">
            <CriarCliente />
          </Route>

          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        {/* <Home /> */}
        {/* <ConfiraEmail /> */}
        {/* <Cobrancas /> */}
      </div>

      {/* <main>
        <Login />
        <Cadastro />
      </main> */}
    </BrowserRouter>
  );
}

export default App;
