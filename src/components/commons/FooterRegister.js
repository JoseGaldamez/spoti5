import React from "react";

function FooterRegister({ setSelectedForm }) {
  return (
    <>
      <div className="register-form__options">
        <p
          onClick={() => {
            setSelectedForm(null);
          }}
        >
          Volver
        </p>
        <p>
          Ya tienes Spoti5{" "}
          <span
            onClick={() => {
              setSelectedForm("login");
            }}
          >
            Iniciar sesion
          </span>{" "}
        </p>
      </div>
    </>
  );
}

export default FooterRegister;
