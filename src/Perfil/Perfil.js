import React from "react";
import profileIcon from "../assets/profile.svg";

const Perfil = () => {
  return (
    <div className="profile">
      <span>
        <img src={profileIcon} alt="" />
      </span>
      <div className="saldo"></div>
    </div>
  );
};

export default Perfil;
