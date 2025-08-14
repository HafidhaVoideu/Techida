"use client";
import React, { ReactNode } from "react";
import { Form as FormikForm } from "formik";

import { motion } from "motion/react";
import { slideFromRight } from "@/lib/variants";

type TFormProps = {
  children: ReactNode;
  className?: string;
};

const Form = ({ children, className = "md:max-w-[450px]" }: TFormProps) => {
  return (
    <motion.div
      variants={slideFromRight}
      initial="initial"
      whileInView="animate"
      animate="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="flex-1/2"
    >
      <FormikForm
        className={` grid grid-cols-1 md:grid-cols-2  gap-4 order-1 md:order-2 w-full justify-items-center   ${className} `}
      >
        {children}
      </FormikForm>
    </motion.div>
  );
};

export default Form;
