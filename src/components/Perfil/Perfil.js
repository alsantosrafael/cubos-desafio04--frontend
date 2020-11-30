import React from "react";
import profileIcon from "../../assets/profile.svg";
import "./styles.css";
import Logout from "../Logout/Logout";

const Perfil = (props) => {
  return (
    <div className="corpo">
      <div className="profile">
        <span>
          <img src={profileIcon} alt="Menu" />
        </span>
        <section className="content">
          {props.children}
          {/* <button className="logout">
            <img src={logoutIcon} alt="" /> Deslogar
          </button> */}
        </section>
      </div>
    </div>
  );
};

export default Perfil;
