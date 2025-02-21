import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "@/components/ui/forms/InputField/InputField";
import FormButton from "@/components/ui/forms/FormButton/FormButton";


type Inputs = {
  email: string;
  password: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          id="email"
          label="이메일"
          type="text"
          placeholder="이메일을 입력해주세요"
          register={register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: emailPattern,
              message: "이메일 형식으로 입력해주세요",
            },
          })}
          error={errors.email?.message}
        />

        <InputField
          id="password"
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          register={register("password", {
            required: "비밀번호를 입력해주세요",
            minLength: {
              value: 8,
              message: "비밀번호를 8자 이상 입력해주세요",
            },
          })}
          error={errors.password?.message}
        />
        <FormButton
          disabled={isSubmitting}> 
          로그인
          </FormButton>
        
        {/* <input
        className={styles.submit}
        type="submit" disabled={isSubmitting} /> */}



      </form>
    </div>
  );
}
