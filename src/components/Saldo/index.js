import React from "react";
import cifraoIcon from "../../assets/cifrao.svg";
import "./styles.css";

const Saldo = () => {
    return (
        <div className="saldo">
            <span>
                <img src={cifraoIcon} alt="" />
                Saldo em Conta
            </span>
            <h4>R$ 0,00</h4>
        </div>
    );
};

export default Saldo;
