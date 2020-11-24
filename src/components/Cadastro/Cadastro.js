import React from "react";
import "./styles.css";

import academyLogo from "../../assets/academy-logo.svg";
import senhaOffIcon from "../../assets/senha-off.svg";

const Cadastro = () => {
  return (
    <>
      <div className="card-cadastro">
        <div className="logo-container">
          <img src={academyLogo} alt="logo-academy" />
        </div>
        <form className="cadastro" method="post">
          <label htmlFor="name">
            Nome:
            <br />
            <input name="name" id="name" type="name" placeholder="Seu nome" />
          </label>
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
          <label className="senha" htmlFor="senha">
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
          <button>Criar conta</button>
        </form>
      </div>
      <p>
        Já possui uma conta? <a href="/">Acesse agora!</a>
      </p>
    </>
  );
};

export default Cadastro;
