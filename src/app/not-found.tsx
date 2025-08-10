import Button from "@/components/UI/Button";

import Link from "next/link";

import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-6">
      <Image
        src="/assets/404.png"
        alt="not-found"
        width={500}
        height={500}
      ></Image>
      <h1 className="text-5xl font-bold mb-4 text-dark-gray my-4">
        404 - Page Not Found
      </h1>

      <p className="text-lg text-gray-500 mb-6">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <Button href="/" text="go back to home"></Button>
    </div>
  );
}
