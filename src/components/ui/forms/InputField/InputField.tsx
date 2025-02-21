import React from "react";
import styles from './InputField.module.scss';

type InputProps = {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    register: any;
    error?: string;
};

const InputField: React.FC< InputProps > = ({id, label, type, placeholder,register, error}) => {

    return(
        <div className={styles.container}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <input className={styles.input} id={id} type={type} placeholder={placeholder} {...register} />
            <div className={styles.errormessage}>
             {error && <span>{error}</span>}
            </div>
        </div>
    );
};

export default InputField;