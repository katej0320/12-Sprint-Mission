import React from "react";
import styles from './InputField.module.scss';

type InputProps = {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    register: any;
    errors?: { message? : string};
    className?: string;
   
};

const InputField: React.FC< InputProps > = ({id, label, type, placeholder,register, errors, }) => {

    return(
        <div className={styles.container}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <input className={`${ errors?.message ? styles.inputError : styles.input}`} id={id} type={type} placeholder={placeholder} {...register} />
            <div className={styles.errormessage}>
             
            </div>
        </div>
    );
};

export default InputField;