import "./styles.css";
import React from "react";
import Menu from "../../components/Menu/Menu";
import Perfil from "../../components/Perfil/Perfil";
import lupaIcon from "../../assets/search.svg";

const Cobrancas = () => {
  return (
    <div className="cobrancas">
      <Menu />
      <main className="content-cobrancas">
        <Perfil />

        <div className="busca">
          <input type="text" placeholder="Procurar por Nome, E-mail ou CPF" />
          <button>
            <img src={lupaIcon} alt="buscar" />
            Buscar
          </button>
        </div>
        <section className="lista-cobrancas"></section>
      </main>
    </div>
  );
};

export default Cobrancas;
