import "./styles.css";
import React from "react";
import Menu from "../../components/Menu/Menu";
import Perfil from "../../components/Perfil/Perfil";
import usersIcon from "../../assets/users.svg";
import cobrancasIcon from "../../assets/money.svg";
import Saldo from "../../components/Saldo";
import { fazerRequisicaoComBody } from "../../helpers/requisicao";
import { ContextToken } from "../../App";

const Home = () => {
  const [relatorio, setRelatorio] = React.useState(null);
  const { token, setToken } = React.useContext(ContextToken);
  React.useEffect(async () => {
    const resposta = await fazerRequisicaoComBody(
      `https://cubos-desafio-4.herokuapp.com/relatorios`,
      "GET",
      undefined,
      token
    ).then((resposta) => {
      return resposta.json();
    });
    console.log(resposta);
    setRelatorio(resposta.dados);
  }, []);

  return (
    <div className="home">
      <Menu />
      <main className="content-home">
        <Perfil>
          <Saldo />
        </Perfil>
        <div className="wrapper-home">
          <div className="filtro">
            <ul>
              <li>
                <button>Este mês</button>
              </li>
              <li>
                <button>Este ano</button>
              </li>
              <li>
                <button>Desde o início</button>
              </li>
            </ul>
          </div>
          <section className="cards">
            <div className="card-clientes">
              <header>
                <span>
                  <img src={usersIcon} alt="" />
                </span>
                <h4>Clientes</h4>
              </header>
              <div className="em-dia">
                <h5>Em dia</h5>
                <h3>{relatorio ? relatorio.qtdClientesAdimplentes : 0}</h3>
              </div>
              <div className="inadimplentes">
                <h5>Inadimplentes</h5>
                <h3>{relatorio ? relatorio.qtdClientesInadimplentes : 0}</h3>
              </div>
            </div>
            <div className="card-cobrancas">
              <header>
                <span>
                  <img src={cobrancasIcon} alt="" />
                </span>
                <h4>Cobranças</h4>
              </header>
              <div className="previstas">
                <h5>Previstas</h5>
                <h3>{relatorio ? relatorio.qtdBoletosNaoPagos : 0}</h3>
              </div>
              <div className="vencidas">
                <h5>Vencidas</h5>
                <h3>{relatorio ? relatorio.qtdBoletosVencidos : 0}</h3>
              </div>
              <div className="pagas">
                <h5>Pagas</h5>
                <h3>{relatorio ? relatorio.qtdBoletosPagos : 0}</h3>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
