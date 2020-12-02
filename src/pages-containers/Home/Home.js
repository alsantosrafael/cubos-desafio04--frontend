import "./styles.css";
import React from "react";
import Menu from "../../components/Menu/Menu";
import Perfil from "../../components/Perfil/Perfil";
import usersIcon from "../../assets/users.svg";
import cobrancasIcon from "../../assets/money.svg";
import Saldo from "../../components/Saldo";

const Home = () => {
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
                <h3>0</h3>
              </div>
              <div className="inadimplentes">
                <h5>Inadimplentes</h5>
                <h3>0</h3>
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
                <h3>0</h3>
              </div>
              <div className="vencidas">
                <h5>Vencidas</h5>
                <h3>0</h3>
              </div>
              <div className="pagas">
                <h5>Pagas</h5>
                <h3>0</h3>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
