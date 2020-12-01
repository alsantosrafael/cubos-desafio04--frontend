import "./styles.css";
import React from "react";
import Menu from "../../components/Menu/Menu";
import Perfil from "../../components/Perfil/Perfil";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const CriarCobrancas = () => {
  const { register, handleSubmit, watch } = useForm();
  const cliente = watch("cliente");
  const descricao = watch("descricao");
  const valor = watch("valor");
  const vencimento = watch("vencimento");

  //valid vem do useForm, posso usar required em todos os inputs e
  //usar o valid do useForm para garantir o disabled do button
  const onSubmit = (data) => {
    //Devo fazer uma requisição aqui
    //dentro enviando os dados do formulario para BACK!
    console.log(JSON.stringify(data));
  };

  return (
    <div className="criar-cobrancas">
      <Menu />
      <main className="content-criar-cobrancas">
        <Perfil id="perfil-criar-cobrancas">
          <h1>// CRIAR COBRANÇA</h1>
          <div className="wrapper-criar-cobrancas">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="cadastro-cobranca"
            >
              <label htmlFor="cliente">
                Cliente
                <br />
                {/* Tenho que fazer um map aqui com 
                  uma requisição para todos os 
                  clientes que a API fornecer */}
                <select
                  name="cliente"
                  id="cliente"
                  required
                  ref={register}
                  form="cliente"
                >
                  <option disabled selected value="">
                    Selecione um cliente...
                  </option>
                  <option value="cliente01">Nome do Cliente 01</option>
                  <option value="cliente02">Nome do Cliente 02</option>
                  <option value="cliente03">Nome do Cliente 03</option>
                  <option value="cliente04">Nome do Cliente 04</option>
                </select>
              </label>
              <label htmlFor="descricao">
                Descricao
                <br />
                <textarea
                  ref={register}
                  id="descricao"
                  name="descricao"
                  rows="3"
                  cols="70"
                  placeholder="Descreva a sua cobrança..."
                  required
                ></textarea>
                <p>A descrição será impressa no boleto</p>
              </label>
              <div className="divisor">
                <label className="container-data" htmlFor="valor">
                  Valor
                  <br />
                  <input
                    name="valor"
                    id="valor"
                    type="number"
                    min="1"
                    step="any"
                    required
                    placeholder="R$ 1,00"
                    ref={register}
                  />
                </label>

                <label className="container-vencimento" htmlFor="vencimento">
                  Vencimento
                  <br />
                  <input
                    type="date"
                    name="vencimento"
                    id="vencimento"
                    ref={register}
                    required
                  />
                </label>
              </div>

              <div className="buttons-container">
                <Link to="/">
                  <button
                    className="cancelar"
                    // onClick={() => {
                    //   History.push("/cobrancas");
                    // }}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="criar-cobranca"
                    disabled={!vencimento || !valor || !descricao || !cliente}
                  >
                    Criar cobrança!
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </Perfil>
      </main>
    </div>
  );
};

export default CriarCobrancas;
