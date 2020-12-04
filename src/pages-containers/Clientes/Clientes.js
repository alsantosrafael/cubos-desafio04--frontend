import "./styles.css";
import React from "react";
import Menu from "../../components/Menu/Menu";
import Perfil from "../../components/Perfil/Perfil";
import lupaIcon from "../../assets/search.svg";
import mailIcon from "../../assets/mail.svg";
import telIcon from "../../assets/phone.svg";
import editIcon from "../../assets/edit.svg";

import { Link } from "react-router-dom";
import { fazerRequisicaoComBody } from "../../helpers/requisicao";
import { ContextToken } from "../../App";
import { useForm } from "react-hook-form";
import Saldo from "../../components/Saldo";

import { Pagination } from "antd";
import "antd/dist/antd.css";
const Clientes = () => {
  const [clientes, setClientes] = React.useState(null);
  const { token } = React.useContext(ContextToken);
  const { register, handleSubmit, watch } = useForm();
  const [idEditado, setIdEditado] = React.useState(null);
  const [pagAtual, setPagAtual] = React.useState(1);
  const [qtdPags, setQtdPags] = React.useState(0);
  const busca = watch("busca");
  /*Se der tempo, desmembrar handleBusca e handlePageChange 
  em um useEffect 
  com dependencia dos estados */
  const handleBusca = async () => {
    try {
      const novaReq = await fazerRequisicaoComBody(
        `https://cubos-desafio-4.herokuapp.com/clientes?busca=${register.busca}&clientesPorPagina=10&offset=0`,
        "GET",
        undefined,
        token
      ).then((resposta) => {
        return resposta.json();
      });
      if (novaReq.dados.clientes) setClientes(novaReq.dados.clientes);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChangePage = async () => {
    try {
      const novaReq = await fazerRequisicaoComBody(
        `https://cubos-desafio-4.herokuapp.com/clientes?busca=textodabusca&clientesPorPagina=10&offset=${
          (pagAtual - 1) * 10
        }`,
        "GET",
        undefined,
        token
      ).then((resposta) => {
        return resposta.json();
      });
      if (novaReq.dados) setClientes(novaReq.dados);
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
        console.log(resposta.dados);
        setClientes(resposta.dados.clientes);
        setPagAtual(resposta.dados.paginaAtual);
        setQtdPags(resposta.dados.totalDePaginas);
      });
  }, []);
  return (
    <div className="clientes">
      <Menu />
      <main className="content-clientes">
        <Perfil backgroundWhite>
          <Saldo />
        </Perfil>
        <div className="wrapper-clientes">
          <header className="submenu">
            <div>
              <Link to="/adicionar-cliente">
                <button className="add-client">Adicionar Cliente</button>
              </Link>
            </div>
            <div className="busca">
              <input
                type="text"
                name="busca"
                id="busca"
                placeholder="Procurar por Nome, E-mail ou CPF"
                ref={register}
              />
              <button onClick={handleBusca}>
                <img src={lupaIcon} alt="buscar" />
                Buscar
              </button>
            </div>
          </header>
          <section className="lista-clientes">
            <table>
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Cobranças feitas</th>
                  <th>Cobranças recebidas</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {/* {clientes.length === 0 && (
                  <tr>
                    <div>Não possui clientes...</div>
                  </tr>
                )} */}
                {!clientes ? (
                  <tr>
                    <div>Carregando...</div>
                  </tr>
                ) : (
                  clientes.map((cliente) => {
                    return (
                      <tr key={cliente.id}>
                        <td>
                          <div className="tabela-nome">{cliente.nome}</div>
                          <div>
                            <img src={mailIcon} alt="Ícone email" />
                            {cliente.email}
                          </div>
                          {/* <div>
                            <img src={telIcon} alt="Ícone telefone" />
                            {cliente.tel}
                          </div> */}
                        </td>
                        <td>{cliente.cobrancasFeitas}</td>
                        <td>{cliente.cobrancasRecebidas}</td>
                        <td className="status">{cliente.estaInadimplente}</td>
                        <td>
                          <button>
                            <img src={editIcon} alt="Icone editar cliente" />
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
              defaultCurrent={pagAtual}
              total={qtdPags ? qtdPags : 10}
              onChange={handleChangePage}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Clientes;
