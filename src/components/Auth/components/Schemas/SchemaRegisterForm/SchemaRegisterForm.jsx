import * as yup from 'yup';

export const SpecialCharacter = /[#$%&+\-@ÀÁÂÄÃÅÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŸàáâäãåçèéêëìíîïñòóôõöøùúûüýÿ]/;

export const RegisterSchema = yup.object().shape({
    user: yup.string().required('Registrar tu nombre joven Padawan, debes!'),
    email: yup.string().email('Correo no valido').required('Ingresar tu correo para entrar en la fuerza debes.'),
    pass: yup.string().required('Crear una clave de seguridad joven Padawan.')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .matches(SpecialCharacter, 'La contraseña debe incluir al menos un carácter especial')
        .matches(/[A-Z]/, 'La contraseña debe incluir al menos una letra mayúscula')
        .matches(/[a-z]/, 'La contraseña debe incluir al menos una letra minúscula')
        .matches(/[0-9]/, 'La contraseña debe incluir al menos un número')
        .matches(/^\S*$/, 'La contraseña no debe tener espacios vacíos')
        .matches(/^[^_]*$/, 'La contraseña no puede tener guiones bajos')
        // eslint-disable-next-line no-control-regex
        .matches(/^[^\0-\x1F\x7F-\x9F]*$/, 'La contraseña no debe tener caracteres no imprimibles')
});