import React from "react";
import "./styles.css";

import academyLogo from "../../assets/academy-logo.svg";
import senhaOffIcon from "../../assets/senha-off.svg";
import { useLocation, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ContextToken } from "../../App";
import { fazerRequisicaoComBody } from "../../helpers/requisicao";

const Login = (props) => {
  const { register, handleSubmit, watch } = useForm();
  const { mostrarSenha, setMostrarSenha } = props;
  const { token, setToken } = React.useContext(ContextToken);
  const [logado, setLogado] = React.useState(false);
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
          <button
            type="submit"
            disabled={!user || !senha}
            onClick={async (event) => {
              event.preventDefault();
              if (logado) {
                setLogado(false);
              } else {
                try {
                  const respostaLogin = await fazerRequisicaoComBody(
                    `${process.env.REACT_APP_API_URL}/auth`,
                    "POST",
                    { email: register.user, password: register.senha }
                  ).then((resposta) => resposta.json());
                  if (respostaLogin.token) {
                    setToken(respostaLogin.token);
                    console.log(respostaLogin);
                  } else {
                    alert(respostaLogin.mensagem);
                  }
                } catch (err) {
                  console.log(err.message);
                }
              }
            }}
          >
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
