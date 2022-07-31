import React, { useState } from "react";
//import { toast } from "react-toastify";
import { Button, Form } from "semantic-ui-react";
import InputRegister from "../../commons/InputRegister";
import { validateDataForm } from "../RegisterForm/utilsRegisterForm";
import "./LoginForm.scss";

export function LoginForm({ setSelectedForm }) {
  const [formData, setFormData] = useState(defaultValueForm);
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState({});

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
            type="email"
            name="email"
            formData={formData}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            formError={formError}
            placeholder="Correo electrónico"
            errorText="Por favor introduce un correo valido"
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
            errorText="La contraseña debe tener al menos 6 caracteres"
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
