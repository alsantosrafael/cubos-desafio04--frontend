import "./styles.css";
import React from "react";
import Menu from "../../components/Menu/Menu";
import Perfil from "../../components/Perfil/Perfil";
import lupaIcon from "../../assets/search.svg";
import printerIcon from "../../assets/printer.svg";
import Saldo from "../../components/Saldo";
import { fazerRequisicaoComBody } from "../../helpers/requisicao";
import { ContextToken } from "../../App";
import { useForm } from "react-hook-form";
import { Pagination } from "antd";
import "antd/dist/antd.css";

const Cobrancas = () => {
  const [cobrancas, setCobrancas] = React.useState(null);
  const [pagAtual, setPagAtual] = React.useState(1);
  const [qtdPags, setQtdPags] = React.useState(0);
  //   const [offset, setOffset] = React.useState(0);
  const { token, setToken } = React.useContext(ContextToken);
  const { register, handleSubmit, watch } = useForm();
  const busca = watch("busca");

  const handleBusca = async (data) => {
    try {
      const novaReq = await fazerRequisicaoComBody(
        `https://cubos-desafio-4.herokuapp.com/cobrancas?busca=${data.busca}&cobrancasPorPagina=10&offset=0`,
        "GET",
        undefined,
        token
      ).then((resposta) => {
        console.log(resposta.dados);
        return resposta.json();
      });
      if (novaReq) setCobrancas(novaReq.dados.cobrancas);
    } catch (err) {
      console.log(err.message);
    }
  };

  async function onChange(page) {
    const pagina = page - 1;
    try {
      const novaReq = await fazerRequisicaoComBody(
        `https://cubos-desafio-4.herokuapp.com/cobrancas?cobrancasPorPagina=10&offset=${
          pagina * 10
        }`,
        "GET",
        undefined,
        token
      ).then((resposta) => {
        return resposta.json();
      });
      if (novaReq.dados) {
        setCobrancas(novaReq.dados.cobrancas);
        setQtdPags(novaReq.dados.totalDePaginas);
      }
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }
  }

  React.useEffect(() => {
    fazerRequisicaoComBody(
      `https://cubos-desafio-4.herokuapp.com/cobrancas?cobrancasPorPagina=10&offset=0`,
      "GET",
      undefined,
      token
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((resposta) => {
        console.log(resposta.dados);
        setCobrancas(resposta.dados.cobrancas);
        setPagAtual(resposta.dados.paginaAtual);
        setQtdPags(resposta.dados.totalDePaginas);
      });
  }, []);
  return (
    <div className="cobrancas">
      <Menu />
      <main className="content-cobrancas">
        <Perfil backgroundWhite>
          <Saldo />
        </Perfil>
        <div className="wrapper-cobrancas">
          <form onSubmit={handleSubmit(handleBusca)} className="busca">
            <input
              type="text"
              name="busca"
              id="busca"
              ref={register}
              placeholder="Procurar por Nome, E-mail ou CPF"
            />
            <button type="submit">
              <img src={lupaIcon} alt="buscar" />
              Buscar
            </button>
          </form>
          <section className="lista-cobrancas">
            <table>
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Descrição</th>
                  <th>Valor</th>
                  <th>Status</th>
                  <th>Vencimento</th>
                  <th>Boleto</th>
                </tr>
              </thead>
              <tbody>
                {!cobrancas ? (
                  <tr>
                    <div>Carregando...</div>
                  </tr>
                ) : (
                  cobrancas.map((cobranca) => {
                    /*iddocliente */
                    return (
                      <tr key={cobranca.id}>
                        <td className="nome"> {cobranca.iddocliente}</td>
                        <td>{cobranca.descricao}</td>
                        <td>R$ {cobranca.valor}</td>
                        <td className="status">{cobranca.status}</td>
                        <td>
                          {cobranca.vencimento
                            .split("T")[0]
                            .split("-")
                            .reverse()
                            .join("/")}
                        </td>
                        <td>
                          <button>
                            <img src={printerIcon} alt="Icone editar cliente" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </section>
          <div className="container-pagination">
            <Pagination
              size="small"
              total={qtdPags * 10}
              pageSize={10}
              onChange={onChange}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cobrancas;
