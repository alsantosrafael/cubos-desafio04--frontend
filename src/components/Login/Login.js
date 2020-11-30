import React from "react";
import "./styles.css";

import academyLogo from "../../assets/academy-logo.svg";
import senhaOffIcon from "../../assets/senha-off.svg";
import { useLocation, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const { register, handleSubmit, watch } = useForm();
  const { mostrarSenha, setMostrarSenha } = props;

  const user = watch("user");
  const senha = watch("senha");

  return (
    <>
      <div className="card-login">
        <div className="logo-container-login">
          <img src={academyLogo} alt="logo-academy" />
        </div>
        <form className="login" method="post">
          <label htmlFor="user">
            E-mail:
            <br />
            <input
              name="user"
              id="user"
              type="email"
              placeholder="exemplo@gmail.com"
              ref={register}
            />
          </label>
          <br />
          <label htmlFor="senha">
            Senha:
            <br />
            <input
              name="senha"
              id="senha"
              type={mostrarSenha ? "text" : "password"}
              placeholder="Senha"
              ref={register}
            />
            <button
              type="button"
              onClick={() => {
                setMostrarSenha(!mostrarSenha);
              }}
            >
              <img src={senhaOffIcon} alt="olho" />
            </button>
            <br />
          </label>
          <br />

          <Link to="/recuperar-senha">Esqueci minha senha </Link>
          <button type="submit" disabled={!user || !senha}>
            Entrar
          </button>
        </form>
      </div>
      <p className="sem-conta">
        Não tem uma conta? <Link to="/cadastrar-usuario">Cadastre-se!</Link>
      </p>
    </>
  );
};

export default Login;
