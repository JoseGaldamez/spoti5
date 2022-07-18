import React from "react";
import { Icon, Input } from "semantic-ui-react";

const InputRegister = ({
  type,
  formError,
  showPassword,
  setShowPassword,
  placeholder,
  name,
  errorText,
}) => {
  return (
    <>
      <Input
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        name={name}
        placeholder={placeholder}
        icon={
          type === "password" ? (
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
          ) : type === "email" ? (
            "mail outline"
          ) : (
            "user outline"
          )
        }
        //onChange={}
        error={formError[name]}
      />
      {formError[name] && <span className="error-text">{errorText}</span>}
    </>
  );
};

export default InputRegister;
