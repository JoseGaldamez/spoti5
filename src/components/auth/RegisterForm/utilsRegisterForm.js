import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

import { validateEmail } from "../../../utils/validations";

export const onSubmitUtils = (
  formData,
  setFormError,
  setLoading,
  setSelectedForm
) => {
  setFormError({});
  const auth = getAuth();

  if (validateDataForm(formData, setFormError)) {
    setLoading(true);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (useCredentials) => {
        toast.success("Registro correcto");
        await changeUserName(useCredentials.user, formData);
        await sendVerificationEmail(useCredentials.user);
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

const changeUserName = async (currentUser, formData) => {
  await updateProfile(currentUser, {
    displayName: formData.username,
  }).catch((error) => {
    toast.error("No se pudo actualizar el nombre de usuario");
  });
};

const sendVerificationEmail = async (currentUser) => {
  await sendEmailVerification(currentUser)
    .then(() => {
      toast.success("Se ha enviado un correo de verificación");
    })
    .catch((error) => {
      console.log(error);
      toast.error("No se pudo enviar el correo de verificación");
    });
};

export const validateDataForm = (formData, setFormError) => {
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

  if (formData.username?.trim() === "") {
    errors.username = true;
    formOK = false;
  }

  setFormError(errors);
  return formOK;
};
