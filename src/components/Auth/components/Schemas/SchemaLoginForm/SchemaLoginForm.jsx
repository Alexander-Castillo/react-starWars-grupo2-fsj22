import * as yup from 'yup'

export const LoginSchema = yup.object().shape({
    email: yup.string().email('Correo no valido').required('Ingresar tu correo para entrar en la fuerza debes.'),
    pass: yup.string().required('Ingresa tu clave de seguridad joven Padawan.')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
});