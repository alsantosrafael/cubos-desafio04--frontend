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
const Clientes = () => {
  const [clientes, setClientes] = React.useState(null);
  const { token, setToken } = React.useContext(ContextToken);
  const { register, handleSubmit, watch } = useForm();
  const busca = watch("busca");
  React.useEffect(async () => {
    const resposta = await fazerRequisicaoComBody(
      `https://cubos-desafio-4.herokuapp.com/clientes?busca=textodabusca&clientesPorPagina=10&offset=20`,
      "GET",
      undefined,
      token
    ).then((resposta) => {
      return resposta.json();
    });
    console.log(resposta);
    setClientes(resposta.dados);
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
              <button
                onClick={() => {
                  const resposta = fazerRequisicaoComBody(
                    `https://cubos-desafio-4.herokuapp.com/clientes?busca=${register.busca}&clientesPorPagina=10&offset=20`,
                    "GET",
                    undefined,
                    token
                  ).then((resposta) => resposta.json());
                  setClientes(resposta.dados);
                }}
              >
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
                {/* {!clientes ? <tr><div>Carregando...</div></tr> : (clientes.map((cliente) => {
						  (<tr key="cliente.email">
							<td>
		  
							  <div className="tabela-nome">
								{cliente.nome}
							  </div>
							  <div>
								<img src={mailIcon} alt="Ícone email" />
								{cliente.email}
							  </div>
							  <div>
								<img src={telIcon} alt="Ícone telefone" />
								+55(31) 92422-319
							  </div>
							</td>
							<td>{cliente.cobrancasFeitas}</td>
							<td>{cliente.cobrancasRecebidas}</td>
							<td className="status">{cliente.estaInadimplente}</td>
							<td>
							  <button>
								<img src={editIcon} alt="Icone editar cliente" />
							  </button>
							</td>
						  </tr>)
					  })})*/}
                <tr>
                  <td>
                    <div className="tabela-nome">
                      Nome e Sobrenome do cliente
                    </div>
                    <div>
                      <img src={mailIcon} alt="Ícone email" />
                      exemplo@gmail.com
                    </div>
                    <div>
                      <img src={telIcon} alt="Ícone telefone" />
                      +55(31) 92422-319
                    </div>
                  </td>
                  <td>R$ 00.000,00</td>
                  <td>R$ 00.000,00</td>
                  <td className="status">Em dia</td>
                  <td>
                    <button>
                      <img src={editIcon} alt="Icone editar cliente" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="tabela-nome">
                      Nome e Sobrenome do cliente
                    </div>
                    <div>
                      <img src={mailIcon} alt="Ícone email" />
                      exemplo@gmail.com
                    </div>
                    <div>
                      <img src={telIcon} alt="Ícone telefone" />
                      +55(31) 92422-319
                    </div>
                  </td>
                  <td>R$ 00.000,00</td>
                  <td>R$ 00.000,00</td>
                  <td className="status">Inadimplente</td>
                  <td>
                    <button>
                      <img src={editIcon} alt="Icone editar cliente" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="tabela-nome">
                      Nome e Sobrenome do cliente
                    </div>
                    <div>
                      <img src={mailIcon} alt="Ícone email" />
                      exemplo@gmail.com
                    </div>
                    <div>
                      <img src={telIcon} alt="Ícone telefone" />
                      +55(31) 92422-319
                    </div>
                  </td>
                  <td>R$ 00.000,00</td>
                  <td>R$ 00.000,00</td>
                  <td className="status">Pendente</td>
                  <td>
                    <button>
                      <img src={editIcon} alt="Icone editar cliente" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          {/* <div className="container-buttons">
            <button className="back-page">
              <img src={BackIcon} alt="Página anterior" />
            </button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>10</button>
            <button className="next-page">
              <img src={NextIcon} alt="Próxima página" />
            </button>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default Clientes;
