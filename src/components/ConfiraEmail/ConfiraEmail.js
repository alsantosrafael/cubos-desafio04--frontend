import React from "react";
import "./styles.css";

import academyLogo from "../../assets/academy-logo.svg";
import mailLogo from "../../assets/mail.svg";

const ConfiraEmail = () => {
  return (
    <>
      <div className="card-confirma">
        <div className="logo-container-confirma">
          <img src={academyLogo} alt="logo-academy" />
        </div>
        <div className="container-mail">
          <img src={mailLogo} alt="carta" />
        </div>
        <h2>Confira seu e-mail</h2>
        <p className="info-confirma">
          Enviamos as instruções para recuperação de senha
        </p>

        <button type="button">Ok, entendi!</button>
      </div>
    </>
  );
};

export default ConfiraEmail;
