"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";

import { withFormik, FormikProps, FormikErrors, Form } from "formik";
import * as Yup from "yup";

import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const InnerForm = (props: FormikProps<FormValues>) => {
    const { isSubmitting } = props;

    return (
      <Form className="flex flex-col gap-4 max-w-[500px]">
        {/* email*/}

        <Input type="email" name="email" placeholder="email"></Input>
        {/* password */}

        <Input type="password" name="password" placeholder="name"></Input>

        <div className="self-center mt-4">
          <Button text="Submit" type="submit" disabled={isSubmitting}></Button>
        </div>
      </Form>
    );
  };

  interface MyFormProps {
    initialEmail?: string;
    initialPassword?: string;
  }

  const ContactSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character (@, $, !, %, *, ?, &)"
      ),
  });

  const MyForm = withFormik<MyFormProps, FormValues>({
    // Transform outer props into form values

    mapPropsToValues: (props) => {
      return {
        email: props.initialEmail || "",
        password: props.initialPassword || "",
      };
    },

    validationSchema: ContactSchema,
    handleSubmit: (values) => {
      console.log("values:", values);
      // do submitting things
    },
  })(InnerForm);
  return (
    <section className="container">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <Image
          src="/assets/login.svg"
          alt="login-image"
          width={500}
          height={500}
          className="flex-1/2 order-2 md:order-1"
        ></Image>

        <div className="capitalize  flex-1/2 order-1 md:order-2  text-dark-gray ">
          <h1 className="text-5xl font-bold">login</h1>

          <p className="my-4 text-md">
            you dont have an account ?
            <Link href="/signup" className="text-primary font-[600]">
              {" "}
              register now
            </Link>
          </p>

          <MyForm></MyForm>

          <p className="mt-4 text-md">
            forgot password?
            <Link href="/" className="text-primary font-[600]">
              {" "}
              reset password
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
