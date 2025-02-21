import React from 'react';
import styles from './CustomButton.module.scss';


interface CustomButtonProps{
    width: number;
    height: number;
    className?: string;
    children?: React.ReactNode;
    onClick?: ()=> void;
    disabled?: boolean;
}

export default function CustomButton({
    width,
    height,
    className,
    children,
    onClick,
    disabled,
}: CustomButtonProps){

    return(
        <>
            <button 
                className={`${styles.button} ${className ?? ""}`}
                style={{width: width ? `${width}px`: "auto", height: height ? `${height}px` : "auto"}}
                onClick={onClick}
                disabled={disabled}

                >
                    {children}
            </button>
        </>
    );
}