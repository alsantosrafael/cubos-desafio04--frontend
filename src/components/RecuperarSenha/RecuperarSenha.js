import React from "react";
import "./styles.css";

import academyLogo from "../../assets/academy-logo.svg";
import { fazerRequisicaoComBody } from "../../helpers/requisicao";
import { useForm } from "react-hook-form";

const RecuperarSenha = () => {
  const { register, handleSubmit, watch } = useForm();
  const email = watch("user");
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
              ref={register}
            />
          </label>
          <br />
          <button type="submit" disabled={!email}>
            Recuperar Senha
          </button>
        </form>
      </div>
    </>
  );
};

export default RecuperarSenha;
