import React from "react";
import "./styles.css";

import { useForm } from "react-hook-form";
import academyLogo from "../../assets/academy-logo.svg";
import senhaOffIcon from "../../assets/senha-off.svg";
import { Link, useLocation } from "react-router-dom";

const Cadastro = (props) => {
  const currentPath = useLocation().pathname;
  const { mostrarSenha, setMostrarSenha } = props;
  const { register, handleSubmit, watch } = useForm();

  const nome = watch("nome");
  const user = watch("user");
  const senha = watch("senha");
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
            <input
              name="nome"
              id="nome"
              type="text"
              ref={register}
              placeholder="Seu nome"
            />
          </label>
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
          <label className="senha" htmlFor="senha">
            Senha:
            <br />
            <input
              name="senha"
              id="senha"
              placeholder="Senha"
              type={mostrarSenha ? "text" : "password"}
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
          <button
            type="submit"
            className="criar-conta"
            disabled={!nome || !user || !senha}
          >
            Criar conta
          </button>
        </form>
      </div>
      <p>
        Já possui uma conta? <Link to="/">Acesse agora!</Link>
      </p>
    </>
  );
};

export default Cadastro;
