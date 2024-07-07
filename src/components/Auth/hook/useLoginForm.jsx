import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { LoginSchema } from "../components/Schemas/SchemaLoginForm/SchemaLoginForm"

export const useLoginForm =()=>{

    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        resolver: yupResolver(LoginSchema)
    });
    return{
        register,
        handleSubmit,
        errors,
        trigger,
    };
};