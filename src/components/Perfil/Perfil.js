import React from "react";
import profileIcon from "../../assets/profile.svg";
import cifraoIcon from "../../assets/cifrao.svg";
import logoutIcon from "../../assets/logout.svg";
import "./styles.css";

const Perfil = () => {
  return (
    <div className="profile">
      <span>
        <img src={profileIcon} alt="" />
      </span>
      <section className="content">
        <div className="saldo">
          <span>
            <img src={cifraoIcon} alt="cifrão" />
            Saldo em Conta
          </span>
          <h4>R$ 0,00</h4>
        </div>
        <button className="logout">
          <img src={logoutIcon} alt="" /> Deslogar
        </button>
      </section>
    </div>
  );
};

export default Perfil;
