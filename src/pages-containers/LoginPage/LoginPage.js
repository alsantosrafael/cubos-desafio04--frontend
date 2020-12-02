import React from "react";
import { Link, useLocation, Switch, Route } from "react-router-dom";
import { useForm } from "react-hook-form";

import { ContextToken } from "../../App";

import "./styles.css";
import Login from "../../components/Login/Login";
import RecuperarSenha from "../../components/RecuperarSenha/RecuperarSenha";
import Cadastro from "../../components/Cadastro/Cadastro";
import { fazerRequisicaoComBody } from "../../helpers/requisicao";

const LoginPage = () => {
  const currentPath = useLocation().pathname;

  const { mostrarSenha, setMostrarSenha } = React.useContext(ContextToken);

  return (
    <div className="inicio">
      <Switch>
        <Route exact path="/">
          <Login
            mostrarSenha={mostrarSenha}
            setMostrarSenha={setMostrarSenha}
          />
        </Route>
        <Route path="/cadastrar-usuario">
          <Cadastro
            mostrarSenha={mostrarSenha}
            setMostrarSenha={setMostrarSenha}
          />
        </Route>
        <Route exact path="/recuperar-senha">
          <RecuperarSenha />
        </Route>
      </Switch>
    </div>
  );
};

export default LoginPage;
