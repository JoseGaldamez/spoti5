import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

import { onSubmitUtils } from "./utilsRegisterForm";
import "./RegisterForm.scss";
import InputRegister from "../../commons/InputRegister";
import FooterRegister from "../../commons/FooterAuth";

export function RegisterForm({ setSelectedForm }) {
  const [formData, setFormData] = useState(defaultValueForm);
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    onSubmitUtils(formData, setFormError, setLoading, setSelectedForm);
    console.log(formError);
  };

  return (
    <div className="register-form">
      <h1>Empieza a escuchar con una cuenta gratis.</h1>
      <Form onChange={onChange} onSubmit={onSubmit}>
        <Form.Field>
          <InputRegister
            type="email"
            formError={formError}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            placeholder="Correo electrónico"
            name="email"
            errorText="Por favor introduce un correo valido"
          />
          <InputRegister
            type="password"
            formError={formError}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            placeholder="Contraseña"
            name="password"
            errorText="La contraseña debe tener al menos 6 caracteres"
          />
          <InputRegister
            type="text"
            formError={formError}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            placeholder="Nombre de usuario"
            name="username"
            errorText="El nombre de usuario debe tener entre 3 y 15 caracteres"
          />
          <Button type="submit" loading={loading}>
            Continuar
          </Button>
        </Form.Field>
      </Form>
      <FooterRegister setSelectedForm={setSelectedForm} />
    </div>
  );
}

const defaultValueForm = {
  email: "",
  password: "",
  username: "",
};
