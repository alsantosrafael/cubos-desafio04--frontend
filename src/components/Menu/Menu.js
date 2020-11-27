import React from "react";
import "./styles.css";

import moneyIcon from "../../assets/money.svg";
import logoIcon from "../../assets/Logo.svg";
import homeIcon from "../../assets/home.svg";
import usersIcon from "../../assets/users.svg";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">
        <img src={logoIcon} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={homeIcon} alt="home" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/cobrancas">
              <img src={moneyIcon} alt="money" />
              Cobranças
            </Link>
          </li>
          <li>
            <Link to="/clientes">
              <img src={usersIcon} alt="users" />
              Clientes
            </Link>
          </li>
        </ul>
      </nav>
      <button>Criar cobrança</button>
    </div>
  );
};

export default Menu;
