import "./styles.css";
import React from "react";
import Menu from "../../components/Menu/Menu";
import Perfil from "../../components/Perfil/Perfil";
import lupaIcon from "../../assets/search.svg";
import printerIcon from "../../assets/printer.svg";
const Cobrancas = () => {
  return (
    <div className="cobrancas">
      <Menu />
      <main className="content-cobrancas">
        <Perfil />
        <div className="wrapper">
          <div className="busca">
            <input type="text" placeholder="Procurar por Nome, E-mail ou CPF" />
            <button>
              <img src={lupaIcon} alt="buscar" />
              Buscar
            </button>
          </div>
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
                <tr>
                  <td className="nome"> Nome e Sobrenome do cliente</td>
                  <td>Aqui vai alguma descrição</td>
                  <td>R$ 00.000,00</td>
                  <td className="status">[.....] Inadimplente</td>
                  <td>12/12/2020</td>
                  <td>
                    <button>
                      <img src={printerIcon} alt="Icone editar cliente" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="nome">Nome e Sobrenome do cliente</td>
                  <td>Aqui vai alguma descrição</td>
                  <td>R$ 00.000,00</td>
                  <td className="status">[.....] Inadimplente</td>
                  <td>12/12/2020</td>
                  <td>
                    <button>
                      <img src={printerIcon} alt="Icone editar cliente" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="nome">Nome e Sobrenome do cliente</td>
                  <td>Aqui vai alguma descrição</td>
                  <td>R$ 00.000,00</td>
                  <td className="status">[.....] Inadimplente</td>
                  <td>12/12/2020</td>
                  <td>
                    <button>
                      <img src={printerIcon} alt="Icone editar cliente" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Cobrancas;
