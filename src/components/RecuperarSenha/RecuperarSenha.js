import React from "react";
import "./styles.css";

import academyLogo from "../../assets/academy-logo.svg";

const RecuperarSenha = () => {
  return (
    <>
      <div className="card-recuperar">
        <div className="logo-container-recuperar">
          <img src={academyLogo} alt="logo-academy" />
        </div>
        <p className="info">
          Informe o e-mail associado a sua conta e vamos te enviar instruções
          para resetar sua senha
        </p>
        <form className="recuperar" method="post">
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
          <button>Recuperar Senha</button>
        </form>
      </div>
    </>
  );
};

export default RecuperarSenha;
