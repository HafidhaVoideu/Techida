import React from "react";

import { Field, ErrorMessage } from "formik";
import { Tinputprops } from "@/lib/types";

const Input = ({
  name,
  type,
  placeholder,
  inputType = "input",

  customClass = "",

  label = "",
  rows,
}: Tinputprops) => {
  return (
    <div className={`w-full flex-col flex gap-1   ${customClass} cols-span-1`}>
      <label className=" font-semibold capitalize mb-2">
        {label ? label : name}
      </label>
      <Field
        as={inputType}
        type={type}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="border-2 border-gray-400 rounded-xl py-[0.5rem] px-3 resize-none

         focus:border-primary focus:outline-none
        "
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-600 font-semibold text-sm mt-2
        relative before:content-['*'] before:mr-1 before:text-red-600 before:inline-block
        "
      ></ErrorMessage>
    </div>
  );
};

export default Input;
