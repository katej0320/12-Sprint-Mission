import React from 'react';
import styles from './CustomButton.module.scss';


interface CustomButtonProps{
    width: number;
    height: number;
    className?: string;
    children?: React.ReactNode;
    onClick?: ()=> void;
}

export default function CustomButton({
    width,
    height,
    className,
    children,
    onClick,
}: CustomButtonProps){

    return(
        <>
            <div 
                className={`${styles.button} ${className ?? ""}`}
                style={{width: width ? `${width}px`: "auto", height: height ? `${height}px` : "auto"}}
                onClick={onClick}
                >
                    {children}
            </div>
        </>
    );
}