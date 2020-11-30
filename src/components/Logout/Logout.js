import React from "react";

import logoutIcon from "../../assets/logout.svg";
const Logout = () => {
  return (
    <>
      <button className="logout">
        <img src={logoutIcon} alt="" /> Deslogar
      </button>
    </>
  );
};

export default Logout;
