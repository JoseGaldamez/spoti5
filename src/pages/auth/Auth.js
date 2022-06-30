import React, { useState } from "react";
import LoginForm from "../../components/auth/LoginForm";
import RegisterForm from "../../components/auth/RegisterForm";
import AuthOptions from "../../components/auth/AuthOptions";

import BackgroundApp from "../../assets/jpg/background-auth.jpg";
import LogoNameWhite from "../../assets/png/logo-name-white.png";

// Styles
import "./auth.scss";

function Auth() {
  const [selectedForm, setselectedForm] = useState(null);

  const handleForm = () => {
    switch (selectedForm) {
      case "login":
        return <LoginForm />;

      case "register":
        return <RegisterForm />;

      default:
        return <AuthOptions setSelectedForm={setselectedForm} />;
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

export default Auth;
