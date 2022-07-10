import React, { useState } from "react";

import { toast } from "react-toastify";

import { Button, Icon, Form, Input } from "semantic-ui-react";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../../../utils/firebase";
import { validateEmail } from "../../../utils/validations";

import "./RegisterForm.scss";

function RegisterForm({ setSelectedForm }) {
  const [formData, setFormData] = useState(defaultValueForm);
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    setFormError({});
    if (validateDataForm()) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then(async (useCredentials) => {
          toast.success("Registro correcto");
          await changeUserName(useCredentials.user);
          setSelectedForm(null);
        })
        .catch((error) => {
          toast.error("Algo ha salido mal.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const validateDataForm = () => {
    let errors = {};
    let formOK = true;

    if (!validateEmail(formData.email)) {
      errors.email = true;
      formOK = false;
    }

    if (formData.password.length < 6) {
      errors.password = true;
      formOK = false;
    }

    if (formData.username.trim() === "") {
      errors.username = true;
      formOK = false;
    }

    setFormError(errors);
    return formOK;
  };

  const changeUserName = async (currentUser) => {
    await updateProfile(currentUser, {
      displayName: formData.username,
    }).catch((error) => {
      toast.error("No se pudo actualizar el nombre de usuario");
    });
  };

  return (
    <div className="register-form">
      <h1>Empieza a escuchar con una cuenta gratis.</h1>
      <Form onChange={onChange} onSubmit={onSubmit}>
        <Form.Field>
          <Input
            type="text"
            name="email"
            placeholder="Correo electronico"
            icon="mail outline"
            //onChange={}
            error={formError.email}
          />
          {formError.email && (
            <span className="error-text">
              Por favor introduce un correo valido
            </span>
          )}
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Contraseña"
            icon={
              showPassword ? (
                <Icon
                  name="eye slash outline"
                  link
                  onClick={() => {
                    setShowPassword(false);
                  }}
                />
              ) : (
                <Icon
                  name="eye"
                  link
                  onClick={() => {
                    setShowPassword(true);
                  }}
                />
              )
            }
            //onChange={}
            error={formError.password}
          />
          {formError.password && (
            <span className="error-text">
              La contraseña debe contener al menos 6 caracteres
            </span>
          )}
          <Input
            type="text"
            name="username"
            placeholder="Como deberiamos llamarte?"
            icon="user circle outline"
            //onChange={}
            error={formError.username}
          />
          {formError.username && (
            <span className="error-text">Ingrese su nombre</span>
          )}
          <Button type="submit" loading={loading}>
            Continuar
          </Button>
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
