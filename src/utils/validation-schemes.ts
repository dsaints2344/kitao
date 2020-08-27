import * as yup from "yup";

export const signin = yup.object({
  email: yup
    .string()
    .email("Por favor, ingresar un email valido.")
    .required("El correo electronico es requerido."),
  password: yup.string().required("La contraseña es requerida."),
});
