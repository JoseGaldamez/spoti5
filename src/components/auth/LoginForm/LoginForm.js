import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form } from "semantic-ui-react";
import { auth } from "../../../utils/firebase";
import InputRegister from "../../commons/InputRegister";
import { validateDataForm } from "../RegisterForm/utilsRegisterForm";
import "./LoginForm.scss";

function LoginForm({ setSelectedForm }) {
  const [formData, setFormData] = useState(defaultValueForm);
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);
  const [userActive, setUserActive] = useState(false);
  const [user, setUser] = useState(null);

  const handlerOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlerOnSubmit = () => {
    if (validateDataForm(formData, setFormError)) {
      console.log("Login correcto");
    }
  };

  return (
    <div className="Login-form">
      <h1>Musica para todos</h1>
      <Form onSubmit={handlerOnSubmit} onChange={handlerOnChange}>
        <Form.Field>
          <InputRegister
            type="text"
            name="email"
            formData={formData}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            formError={formError}
            placeholder="Correo electrónico"
          />
        </Form.Field>
        <Form.Field>
          <InputRegister
            type="password"
            name="password"
            formData={formData}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            formError={formError}
            placeholder="Contraseña"
          />
        </Form.Field>
        <Button type="submit">Iniciar Sesión</Button>
      </Form>
      <div className="Login-form__options">
        <p
          onClick={() => {
            setSelectedForm(null);
          }}
        >
          Volver
        </p>
        <p>
          ¿No tienes una cuenta?
          <span
            onClick={() => {
              setSelectedForm("register");
            }}
          >
            Regístrate
          </span>
        </p>
      </div>
    </div>
  );
}

const defaultValueForm = {
  email: "",
  password: "",
};

export default LoginForm;
