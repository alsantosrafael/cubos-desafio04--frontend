import "./styles.css";
import React from "react";
import Menu from "../../components/Menu/Menu";
import Perfil from "../../components/Perfil/Perfil";
import { ContextToken } from "../../App";
import { fazerRequisicaoComBody } from "../../helpers/requisicao";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
const CriarCobrancas = () => {
  const { register, handleSubmit, watch } = useForm();
  const { token } = React.useContext(ContextToken);
  const [clientes, setClientes] = React.useState(null);
  const cliente = watch("cliente");
  const descricao = watch("descricao");
  const valor = watch("valor");
  const vencimento = watch("vencimento");
  const history = useHistory();
  //valid vem do useForm, posso usar required em todos os inputs e
  //usar o valid do useForm para garantir o disabled do button
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const req = await fazerRequisicaoComBody(
        `https://cubos-desafio-4.herokuapp.com/cobrancas`,
        "POST",
        {
          id_cliente: data.cliente,
          descricao: data.descricao,
          valor: data.valor,
          vencimento: data.vencimento,
        },
        token
      );
      if (req) {
        alert(`Cobranca ${req.dados.id} criado com sucesso!`);
        history.push("/cobrancas");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  React.useEffect(() => {
    fazerRequisicaoComBody(
      `https://cubos-desafio-4.herokuapp.com/clientes?clientesPorPagina=1000&offset=0`,
      "GET",
      undefined,
      token
    )
      .then((resposta) => resposta.json())
      .then((resposta) => {
        console.log(resposta);
        setClientes(resposta.dados.clientes);
      });
  }, []);

  return (
    <div className="criar-cobrancas">
      <Menu />
      <main className="content-criar-cobrancas">
        <Perfil id="perfil-criar-cobrancas">
          <h1>//CRIAR COBRANÇA</h1>
          <div className="wrapper-criar-cobrancas">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="cadastro-cobranca"
            >
              <label htmlFor="cliente">
                Cliente
                <br />
                <select name="cliente" id="cliente" required ref={register}>
                  {clientes ? (
                    clientes.map((cliente) => {
                      return (
                        <option key={cliente.id} value={cliente.id}>
                          {cliente.nome}
                        </option>
                      );
                    })
                  ) : (
                    <option disabled selected value="">
                      Selecione um cliente...
                    </option>
                  )}
                  ))
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
                <button
                  className="cancelar"
                  onClick={() => {
                    history.push("/cobrancas");
                  }}
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
              </div>
            </form>
          </div>
        </Perfil>
      </main>
    </div>
  );
};

export default CriarCobrancas;
