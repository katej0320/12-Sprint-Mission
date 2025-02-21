import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <p>이메일</p>
        <input {...register("email", {required: true, pattern:})} />

        <p>비밀번호</p>
        <input {...register("password", { required: true, minLength: 8 })} />

        {errors.password && <span>This field is required</span>}

        <input type="submit" />
        </form>
    </div>
  );
}
