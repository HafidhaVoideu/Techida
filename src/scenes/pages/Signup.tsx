"use client";
import React from "react";

import Image from "next/image";

import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

import { motion } from "motion/react";
import { slideFromLeft } from "@/lib/variants";

import Form from "@/components/UI/Form";
import CustomLink from "@/components/UI/CustomLink";

interface FormValues {
  email: string;
  confirmPassword: string;
  username: string;
  password: string;
}

const Signup = () => {
  const InnerForm = (props: FormikProps<FormValues>) => {
    const { isSubmitting } = props;

    return (
      <Form>
        {/* username*/}

        <Input
          type="input"
          name="username"
          placeholder="username"
          customClass="col-span-2"
        ></Input>
        {/* email*/}

        <Input
          type="input"
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
        <Input
          type="input"
          name="confirmPassword"
          label="confirm password"
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
    initialConfirmPassword: string;
    initialUsername: string;
  }

  const ContactSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    username: Yup.string().required("Username is required"),

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

    confirmPassword: Yup.string()
      .required("Please confirm your password")
      .test("passwords-match", "Passwords must match", function (value) {
        return value === this.parent.password;
      }),
  });

  const MyForm = withFormik<MyFormProps, FormValues>({
    // Transform outer props into form values

    mapPropsToValues: (props) => {
      return {
        email: props.initialEmail || "",
        password: props.initialPassword || "",
        username: props.initialUsername || "",
        confirmPassword: props.initialConfirmPassword || "",
      };
    },

    validationSchema: ContactSchema,
    handleSubmit: (values) => {
      console.log("values:", values);
      // do submitting things
    },
  })(InnerForm);
  return (
    <section className="container flex flex-col  lg:items-start md:flex-row justify-between gap-24">
      <motion.div
        variants={slideFromLeft}
        initial="initial"
        whileInView="animate"
        animate="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="flex-1/2 max-w-[600px] order-2 md:order-1"
      >
        <Image
          src="/assets/signup.svg"
          alt="login-image"
          width={500}
          height={500}
          className="h-full w-full"
          priority
        ></Image>
      </motion.div>

      <div className=" flex-1/2 order-1 md:order-2  text-dark-gray ">
        <h1 className=" text-3xl sm:text-4xl md:text-5xl  font-bold">
          Sign up
        </h1>

        <CustomLink
          title="have an account already?"
          subtitle="   login"
          href="/login"
        ></CustomLink>

        <MyForm
          initialEmail=""
          initialPassword=""
          initialConfirmPassword=""
          initialUsername=""
        />
      </div>
    </section>
  );
};

export default Signup;
