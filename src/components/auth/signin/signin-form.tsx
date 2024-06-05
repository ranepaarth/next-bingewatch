"use client";

import googleLogo from "@/assets/google-color-svgrepo-com.svg";
import Input from "@/components/auth/input";
import Logo from "@/components/logo";
import { Link } from "@/navigation";
import { LoginSchema } from "@/schema/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type SingInFormTypes = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const localeActive = useLocale() as Locales;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SingInFormTypes>({
    resolver: zodResolver(LoginSchema),
    reValidateMode: "onChange",
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SingInFormTypes> = (data) => {
    console.log(data);
  };

  return (
    <main className="sm:bg-[url(/images/hero-image.jpg)] w-full min-h-screen relative flex justify-center">
      <div className="absolute inset-0 bg-gradient-radial from-black/50 to-black/70"></div>
      <div className="w-full max-w-screen-xl">
        <header className="flex p-6 z-10">
          <Logo />
        </header>
        <section className="w-full flex justify-center p-8">
          <div className="px-16 py-12 w-full max-w-[450px] bg-black bg-opacity-70 z-20 rounded-md">
            <h3 className="text-white text-3xl font-extrabold mb-8 border-b-4 pb-2 border-primary-600 w-fit pr-4">
              Sign In
            </h3>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                id="email"
                type="email"
                label="Email"
                register={register("email")}
                error={errors.email}
              />
              <Input
                id="password"
                type="password"
                label="Password"
                register={register("password")}
                error={errors.password}
              />
              <button
                className="bg-primary-600 w-full p-2 rounded font-medium hover:bg-primary-700 transition-colors duration-200 ease-in-out disabled:bg-primary-900"
                disabled={isSubmitting}
              >
                Sign In
              </button>
            </form>
            <p className="text-center my-5 text-neutral-500 font-medium">OR</p>
            <button className="w-full grid place-items-center p-2 bg-neutral-700 bg-opacity-70 rounded hover:bg-opacity-50 transition-all duration-200 ease-in-out">
              <Image src={googleLogo} alt="google" className="w-6 h-6" />
            </button>
            <Link href={"/resetPassword"} locale={localeActive}>
              <p className="text-center my-4 hover:underline hover:text-neutral-300 font-medium text-sm">
                Forgot password?
              </p>
            </Link>
            <div className="text-neutral-400 mt-8">
              New to BingeWatch?{" "}
              <Link
                href="/signup"
                className="text-white font-semibold px-1.5 hover:underline"
                locale={localeActive}
              >
                Sign up now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignInForm;
