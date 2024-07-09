import { useState } from "react"
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export const InputTemplate =({ label, type = 'text', name, placeholder, register, errors, trigger, validatePass }) =>{
    
    const [showPass,setShowPass]= useState(false);

    return (
        <div data-mdb-input-init className="form-outline form-white mb-5">
            <label htmlFor={name} className="form-label text-start">{label}</label>
            <div className="input-group">
                <input type={ showPass ? 'text' : type }
                    id={name}
                    className={`form-control form-control-lg fondtext text-white bg-dark ${errors[name] ? 'is-invalid' : ''}`}
                    placeholder={placeholder}
                    {...register(name)}
                    onBlur={()=>trigger(name)}
                    onInput={validatePass}
                />

                {type === 'password' && (
                    <button type="button" className="btn btn-outline-secondary" onClick={()=> setShowPass(!showPass)}><i className={`fa fa-eye${showPass ? '-slash' : ''}`}></i></button>
                )}
            </div>

            {errors[name] && <div className='invalid-feedback'></div>}
        </div>
    );
};
{/**input: label, type, name, placeholder, errors, trigger, validatePass */}
InputTemplate.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    errors: PropTypes.object.isRequired,
    trigger: PropTypes.func.isRequired,
    validatePass: PropTypes.func,
}