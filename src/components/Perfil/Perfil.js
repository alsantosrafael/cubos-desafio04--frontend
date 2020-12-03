import React from "react";
import profileIcon from "../../assets/profile.svg";
import "./styles.css";
import Logout from "../Logout/Logout";
import { ContextToken } from "../../App";
const Perfil = (props) => {
  const { token, setToken } = React.useContext(ContextToken);
  const [mostraLogout, setMostraLogout] = React.useState(false);
  return (
    <div className="corpo">
      <div className={`profile ${props.backgroundWhite && 'profile-background-white'}` } >
        <span onClick={() => setMostraLogout(!mostraLogout)}>
          <img src={profileIcon} alt="Menu" />
        </span>
        {mostraLogout && (
          <div className="logout-container">
            <Logout
              onClick={() => {
                setToken(null);
              }}
            />
          </div>
        )}
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
