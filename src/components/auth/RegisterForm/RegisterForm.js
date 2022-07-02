import React, { useState } from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import auth from "../../../utils/firebase";

import "./RegisterForm.scss";

function RegisterForm({ setSelectedForm }) {
  const [formData, setFormData] = useState(defaultValueForm);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = () => console.log(formData);
  return (
    <div className="register-form">
      <h1>Empieza a escuchar con una cuenta gratis.</h1>
      <Form onChange={onChange} onSubmit={onSubmit}>
        <Form.Field>
          <Input
            type="email"
            name="email"
            placeholder="Correo electronico"
            icon="mail outline"
            //onChange={}
            // error={}
          />
          <Input
            type="password"
            name="password"
            placeholder="Contraseña"
            icon="eye"
            //onChange={}
            // error={}
          />
          <Input
            type="text"
            name="username"
            placeholder="Como deberiamos llamarte?"
            icon="user circle outline"
            //onChange={}
            // error={}
          />
          <Button type="submit">Continuar</Button>
        </Form.Field>
      </Form>

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
    </div>
  );
}

const defaultValueForm = {
  email: "",
  password: "",
  username: "",
};

export default RegisterForm;
