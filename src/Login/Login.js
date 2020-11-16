import React from "react";
import "./styles.css";

const Login = () => {
  return (
    <div className="card-login">
      <div className="logo-container">
        <img src="./academy-logo.svg" alt="logo-academy" />
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
          <input name="senha" id="senha" type="password"></input>
          <button>
            <img src="senha-off.svg" alt="olho" />
          </button>
          <br />
        </label>
        <br />
        <a href="/">Esqueci minha senha</a>
        <button>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
