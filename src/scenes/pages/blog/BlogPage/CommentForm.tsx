"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";

import { withFormik, FormikProps, FormikErrors } from "formik";
import * as Yup from "yup";

import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

import Form from "@/components/UI/Form";

interface FormValues {
  email: string;
  name: string;
  website: string;
  comment: string;
}

const CommentForm = () => {
  const InnerForm = (props: FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting } = props;

    return (
      <Form className="">
        {/* username*/}

        <Input type="input" name="name" placeholder="name"></Input>
        {/* email*/}

        <Input type="input" name="email" placeholder="email"></Input>
        {/* password */}

        <Input
          type="input"
          name="website"
          placeholder="URL"
          customClass="col-span-2"
        ></Input>
        <Input
          type="input"
          inputType="textarea"
          name="comment"
          customClass="col-span-2"
          placeholder="write your comment..."
          rows={7}
        ></Input>

        <div className="self-center mt-4 col-span-2  ">
          <Button
            text="Submit comment"
            type="submit"
            disabled={isSubmitting}
          ></Button>
        </div>
      </Form>
    );
  };

  interface MyFormProps {
    initialEmail?: string;
    initialName?: string;
    initialWebsite?: string;
    initialComment?: string;
  }

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name can't be longer than 50 characters")
      .required("Please enter your name"),

    email: Yup.string()
      .trim()
      .email("Please enter a valid email address")
      .required("Email is required"),

    website: Yup.string()
      .trim()
      .url("Please enter a valid URL (e.g., https://example.com)")
      .required("Website is required"),

    comment: Yup.string()
      .trim()
      .min(10, "Comment must be at least 10 characters long")
      .max(500, "Comment can't exceed 500 characters")
      .required("Please write a comment before submitting"),
  });

  const MyForm = withFormik<MyFormProps, FormValues>({
    // Transform outer props into form values

    mapPropsToValues: (props) => {
      return {
        email: props.initialEmail || "",
        name: props.initialEmail || "",
        comment: props.initialComment || "",
        website: props.initialWebsite || "",
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
        <div className=" flex-1/2 order-1 md:order-2  text-dark-gray ">
          <h1 className="text-2xl font-bold">Lave a reply</h1>

          <p className="my-4 text-md">
            Techida - Business Services Company & IT Solutions Multipurpose
            Responsive Website Template
          </p>

          <MyForm />
        </div>
      </div>
    </section>
  );
};

export default CommentForm;
