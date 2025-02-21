import React, { Children, ReactNode } from "react";
import CustomButton from "../../CustomButton/CustomButton";
import styles from './FormButton.module.scss';


type FormButton = {
    children: React.ReactNode,
    disabled: boolean
}

export default function FormButton({children, disabled}: FormButton) {
  return (
    <CustomButton
      width={640}
      height={56}
      className={styles.CustomButton}
      disabled={disabled ?? false}
    >
        {children}
    </CustomButton>
  );
}
