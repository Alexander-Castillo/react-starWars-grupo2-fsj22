import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterSchema, SpecialCharacter } from "../components/Schemas/SchemaRegisterForm/SchemaRegisterForm"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const useRegisterForm=()=>{

    // manejo de validaciones usando useForm con REACT-HOOK-FORM
    const { register, handleSubmit, formState: { errors }, trigger, watch } = useForm({
        resolver: yupResolver(RegisterSchema)
    });

    // estado para validar el cumplimiento de la creacion de la contraseña
    const [validPass, setValidPass] = useState({
        length: false,
        specialChar: false,
        uppercase: false,
        lowercase: false,
        number: false,
    });
    
    // OBTENCIÓN DEL VALOR DE LA CONTRASEÑA
    const password = watch('pass','');

    //useEffect para validar la contraseña en tiempo real
    useEffect(() => {
        setValidPass({
            length: password.length >= 8,
            specialChar: SpecialCharacter.test(password),
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
        });
    }, [password]);

    return{
        register,
        handleSubmit,
        errors,
        trigger,
        validPass
    };
};