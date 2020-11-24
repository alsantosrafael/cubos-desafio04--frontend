import React from "react";
import "./styles.css";

import moneyIcon from "../../assets/money.svg";
import logoIcon from "../../assets/Logo.svg";
import homeIcon from "../../assets/home.svg";
import usersIcon from "../../assets/users.svg";

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">
        <img src={logoIcon} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <img src={homeIcon} alt="home" />
            Home
          </li>
          <li>
            <img src={moneyIcon} alt="money" />
            Cobranças
          </li>
          <li>
            <img src={usersIcon} alt="users" />
            Clientes
          </li>
        </ul>
      </nav>
      <button>Criar cobrança</button>
    </div>
  );
};

export default Menu;
