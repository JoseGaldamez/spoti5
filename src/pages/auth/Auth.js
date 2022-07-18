import React, { useState } from "react";
import { AuthOptions, LoginForm, RegisterForm } from "../../components/auth";

import BackgroundApp from "../../assets/jpg/background-auth.jpg";
import LogoNameWhite from "../../assets/png/logo-name-white.png";

// Styles
import "./auth.scss";

export function Auth() {
  const [selectedForm, setSelectedForm] = useState(null);

  const handleForm = () => {
    switch (selectedForm) {
      case null:
        return <AuthOptions setSelectedForm={setSelectedForm} />;
      case "register":
        return <RegisterForm setSelectedForm={setSelectedForm} />;
      case "login":
        return <LoginForm setSelectedForm={setSelectedForm} />;

      default:
        break;
    }
  };

  return (
    <div className="auth" style={{ backgroundImage: `url(${BackgroundApp})` }}>
      <div className="auth__dark" />
      <div className="auth__box">
        <div className="auth__box-logo">
          <img src={LogoNameWhite} alt="Spoti5" />
        </div>
        {handleForm()}
      </div>
    </div>
  );
}
