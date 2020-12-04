import "./styles.css";
import React from "react";
import Menu from "../../components/Menu/Menu";
import Perfil from "../../components/Perfil/Perfil";

import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { fazerRequisicaoComBody } from "../../helpers/requisicao";
import { ContextToken } from "../../App";
const CriarCliente = () => {
  const history = useHistory();
  const { register, handleSubmit, watch } = useForm();
  const { token } = React.useContext(ContextToken);
  //valid vem do useForm, posso usar required em todos os inputs e
  //usar o valid do useForm para garantir o disabled do button
  const onSubmit = async (data) => {
    try {
      const req = await fazerRequisicaoComBody(
        `https://cubos-desafio-4.herokuapp.com/clientes`,
        "POST",
        {
          nome: data.cliente,
          cpf: data.cpf,
          email: data.email,
          tel: data.phone,
        },
        token
      );
      if (req.dados) {
        alert(`Cliente ${req.dados.id} criado com sucesso!`);
        history.push("/clientes");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const cliente = watch("cliente");
  const email = watch("email");
  const cpf = watch("cpf");
  const phone = watch("phone");

  return (
    <div className="criar-cliente">
      <Menu />
      <main className="content-criar-cliente">
        <Perfil id="perfil-criar-cliente">
          <h1>//CRIAR CLIENTE</h1>
          <div className="wrapper-criar-cliente">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="cadastro-cliente"
            >
              <label htmlFor="cliente">
                Cliente
                <br />
                {/* Tenho que fazer um map aqui com 
                  uma requisição para todos os 
                  clientes que a API fornecer */}
                <input name="cliente" id="cliente" required ref={register} />
              </label>
              <label htmlFor="email">
                E-mail
                <br />
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  ref={register}
                />
              </label>
              <div className="divisor-clientes">
                <label className="container-cpf" htmlFor="cpf">
                  CPF
                  <br />
                  <input
                    name="cpf"
                    id="cpf"
                    type="text"
                    min="1"
                    max-length="11"
                    step="any"
                    required
                    max
                    placeholder="00000000000"
                    ref={register}
                  />
                </label>

                <label className="container-tel" htmlFor="phone">
                  Telefone
                  <br />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    ref={register}
                    required
                  />
                </label>
              </div>

              <div className="buttons-container-clientes">
                <button
                  className="cancelar-cliente"
                  onClick={() => {
                    history.push("/clientes");
                  }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="criar-cliente"
                  disabled={!cliente || !email || !cpf || !phone}
                >
                  Adicionar cliente!
                </button>
              </div>
            </form>
          </div>
        </Perfil>
      </main>
    </div>
  );
};

export default CriarCliente;
