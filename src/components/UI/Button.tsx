import React from "react";
import Link from "next/link";

type TButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string; // if provided, renders as a link
  onClick?: () => void;
};

const Button = ({
  text,
  type = "button",
  disabled = false,
  href,
  onClick,
}: TButtonProps) => {
  const baseClasses = `
    hover:shadow-lg hover:scale-105 shadow-md font-sans tracking-wide border border-primary w-[200px]
    text-md lg:text-md capitalize font-semibold hover:bg-white hover:text-dark-gray
    transition-all duration-300 ease-in-out px-6 py-3 bg-primary text-button-primary rounded-3xl
  `;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={baseClasses}
    >
      {text}
    </button>
  );
};

export default Button;
