import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

import { ContextToken } from "../../App";

import "./styles.css";
import Login from "../../components/Login/Login";
import RecuperarSenha from "../../components/RecuperarSenha/RecuperarSenha";
import Cadastro from "../../components/Cadastro/Cadastro";
import { fazerRequisicaoComBody } from "../../helpers/requisicao";

const LoginPage = () => {
  const currentPath = useLocation().pathname;
  const [mostrarSenha, setMostrarSenha] = React.useState(false);
  const { token, setToken } = React.useContext(ContextToken);
  return (
    <div classname="inicio">
      {currentPath === "/" && (
        <Login mostrarSenha={mostrarSenha} setMostrarSenha={setMostrarSenha} />
      )}
      {currentPath === "/cadastrar-usuario" && <Cadastro mostrarSenha={mostrarSenha} setMostrarSenha={setMostrarSenha} />}
      {currentPath === "/recuperar-senha" && <RecuperarSenha />}
    </div>
  );
};

export default LoginPage;
