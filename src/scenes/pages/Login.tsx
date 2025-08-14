"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";

import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

import Form from "@/components/UI/Form";

import { motion } from "motion/react";
import { slideFromLeft } from "@/lib/variants";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const InnerForm = (props: FormikProps<FormValues>) => {
    const { isSubmitting } = props;

    return (
      <Form>
        {/* email*/}

        <Input
          type="email"
          name="email"
          placeholder="email"
          customClass="col-span-2"
        ></Input>
        {/* password */}

        <Input
          type="password"
          name="password"
          placeholder="name"
          customClass="col-span-2"
        ></Input>

        <Button
          text="Submit"
          type="submit"
          disabled={isSubmitting}
          customClass="col-span-2 mt-8"
        ></Button>
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
    <section className="container flex flex-col  md:items-start md:flex-row justify-between gap-24  ">
      <motion.div
        variants={slideFromLeft}
        initial="initial"
        whileInView="animate"
        animate="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="flex-1/2 max-w-[600px] order-2 md:order-1"
      >
        <Image
          src="/assets/login.svg"
          alt="login-image"
          width={500}
          height={500}
          priority
          className="h-full w-full"
        ></Image>
      </motion.div>

      <div className="flex-1/2 order-1 md:order-2  text-dark-gray  ">
        <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold">Login</h1>

        <p className="my-4 text-md">
          you dont have an account ?
          <Link href="/signup" className="text-primary font-[600]">
            {" "}
            register now
          </Link>
        </p>

        <MyForm></MyForm>

        <p className="mt-8 text-md">
          forgot password?
          <Link href="/" className="text-primary font-[600]">
            {" "}
            reset password
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
