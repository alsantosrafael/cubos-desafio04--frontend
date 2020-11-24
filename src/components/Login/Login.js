import React from "react";
import "./styles.css";

import academyLogo from "../../assets/academy-logo.svg";
import senhaOffIcon from "../../assets/senha-off.svg";

const Login = () => {
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
            />
          </label>
          <br />
          <label htmlFor="senha">
            Senha:
            <br />
            <input
              name="senha"
              id="senha"
              type="password"
              placeholder="Senha"
            />
            <button>
              <img src={senhaOffIcon} alt="olho" />
            </button>
            <br />
          </label>
          <br />
          <a href="/">Esqueci minha senha</a>
          <button>Entrar</button>
        </form>
      </div>
      <p className="sem-conta">
        Não tem uma conta? <a href="/">Cadastre-se!</a>
      </p>
    </>
  );
};

export default Login;
