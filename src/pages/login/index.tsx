
import React from "react";
import Form from "@/components/forms/Login/LoginForm";
import Social from "@/components/ui/forms/Social/Social";
import styles from "./index.module.scss";
import Image from "next/image";

export default function LoginPage(){

    return(
        <>
            <div className={styles.container}>
                <Image src="/icons/logo.png" alt="logo" width={369} height={132} />
                <Form />
                <Social />
                <div className={styles.signuptext}>
                    <p>판다마켓이 처음이신가요?<span> 회원가입</span></p>
                </div>
            </div>
        </>
    
    )
}