import React from "react";
import LoginPage from "./pages-containers/LoginPage/LoginPage";
import Home from "./pages-containers/Home/Home";
import Cobrancas from "./pages-containers/Cobrancas/Cobrancas";
import CriarCobrancas from "./pages-containers/CriarCobrancas/CriarCobrancas";
import ConfiraEmail from "./components/ConfiraEmail/ConfiraEmail";
import Clientes from "./pages-containers/Clientes/Clientes";
import CriarCliente from "./pages-containers/CriarCliente/CriarCliente";
import Cadastro from "./components/Cadastro/Cadastro";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Switch, Route, Redirect } from "react-router-dom";
import "./index.css";
import RecuperarSenha from "./components/RecuperarSenha/RecuperarSenha";
import EditarCliente from "./pages-containers/EditarCliente/EditarCliente";

export const ContextToken = React.createContext();

function App() {
  // const { params } = useRouteMatch();
  // const { id } = params;
  const [token, setToken] = React.useState(null);
  const [idEditado, setIdEditado] = React.useState(null);
  const [mostrarSenha, setMostrarSenha] = React.useState(false);
  return (
    <div className="App">
      <Switch>
        <ContextToken.Provider
          value={{
            token,
            setToken,
            mostrarSenha,
            setMostrarSenha,
            idEditado,
            setIdEditado,
          }}
        >
          <PrivateRoute to="/home" component={Home} redirect="/" />
          <Route exact path="/cobrancas">
            {token ? <Cobrancas /> : <Redirect to="/" />}
          </Route>

          <Route exact path="/criar-cobrancas">
            {token ? <CriarCobrancas /> : <Redirect to="/" />}
          </Route>

          <Route exact path="/confirmacao-email">
            {token ? <Redirect to="/home" /> : <ConfiraEmail />}
          </Route>

          <Route exact path="/clientes">
            {token ? <Clientes /> : <Redirect to="/" />}
          </Route>

          <Route exact path="/adicionar-cliente">
            {token ? <CriarCliente /> : <Redirect to="/" />}
          </Route>

          <Route exact path="/editar-cliente">
            {token ? <EditarCliente /> : <Redirect to="/" />}
          </Route>

          <Route exact path={["/", "/cadastrar-usuario", "/recuperar-senha"]}>
            {token ? <Redirect to="/home" /> : <LoginPage />}
          </Route>

          {/* <Route path="/">
            <h1>404</h1>
          </Route> */}
        </ContextToken.Provider>
      </Switch>
    </div>
  );
}

export default App;
