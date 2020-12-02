import React from "react";
import "./styles.css";
import logoutIcon from "../../assets/logout.svg";
const Logout = (props) => {
  return (
    <>
      <button className="logout" onClick={props.onClick}>
        <img src={logoutIcon} alt="" /> Deslogar
      </button>
    </>
  );
};

export default Logout;
