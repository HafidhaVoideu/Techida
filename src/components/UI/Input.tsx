import React from "react";

import { Field, ErrorMessage } from "formik";
import { Tinputprops } from "@/lib/types";

const Input = ({
  name,
  type,
  placeholder,
  inputType = "input",
  rows,
}: Tinputprops) => {
  return (
    <div className="w-full flex-col flex gap-2 ">
      <label className=" font-semibold">{name}</label>
      <Field
        as={inputType}
        type={type}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="border-2 border-gray-400 rounded-xl py-2 px-3"
      />

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-600 font-semibold text-sm"
      />
    </div>
  );
};

export default Input;
