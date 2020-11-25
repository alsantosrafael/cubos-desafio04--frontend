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
            <a href="/">
              <img src={homeIcon} alt="home" />
              Home
            </a>
          </li>
          <li>
            <a href="/">
              <img src={moneyIcon} alt="money" />
              Cobranças
            </a>
          </li>
          <li>
            <a href="/">
              <img src={usersIcon} alt="users" />
              Clientes
            </a>
          </li>
        </ul>
      </nav>
      <button>Criar cobrança</button>
    </div>
  );
};

export default Menu;
