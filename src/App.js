import React from "react";
import LoginPage from "./pages-containers/LoginPage/LoginPage";
import Home from "./pages-containers/Home/Home";
import Cobrancas from "./pages-containers/Cobrancas/Cobrancas";
import CriarCobrancas from "./pages-containers/CriarCobrancas/CriarCobrancas";
import ConfiraEmail from "./components/ConfiraEmail/ConfiraEmail";
import Clientes from "./pages-containers/Clientes/Clientes";
import CriarCliente from "./pages-containers/CriarCliente/CriarCliente";
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import "./index.css";

export const ContextToken = React.createContext();

function App() {
  // const { params } = useRouteMatch();
  // const { id } = params;
  const [token, setToken] = React.useState(null);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <ContextToken.Provider value={(token, setToken)}>
            <Route exact path={["/", "/cadastrar-usuario", "/recuperar-senha"]}>
              {/* <Home /> */}
              <LoginPage />
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

            {/* <Route exact path="/cadastrar-usuario">
              <CriarCliente />
            </Route> */}

            {/* <Route>
              <h1>404</h1>
            </Route> */}
          </ContextToken.Provider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
