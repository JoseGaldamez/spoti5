import React from "react";
import { Icon, Input } from "semantic-ui-react";

const InputRegister = ({
  type,
  formError,
  showPassword,
  setShowPassword,
  placeholder,
  name,
}) => {
  if (type === "text") {
    return (
      <>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          icon="mail outline"
          //onChange={}
          error={formError.email}
        />
        {formError.email && (
          <span className="error-text">
            Por favor introduce un correo valido
          </span>
        )}
      </>
    );
  }

  if (type === "password") {
    return (
      <>
        <Input
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
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
          error={formError.password}
        />
        {formError.password && (
          <span className="error-text">
            La contraseña debe contener al menos 6 caracteres
          </span>
        )}
      </>
    );
  }

  return <>Ingrese un tipo de input</>;
};

export default InputRegister;
